import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../features/newsfeed";
import { useEffect, useRef } from "react";
import {
  Container,
  Card,
  Pagination,
  Text,
  Button,
  Grid,
  CardSection,
  Image,
  Loader,
  Title,
} from "@mantine/core";

import { useNavigate } from "react-router-dom";

const Articles = () => {
    /**useRef is a react hook that is used to persist values between re-renders . it is used here because useState executes twice and therefore having two different re-renders */
  const hasFetched = useRef(false);
  const navigate = useNavigate();
/**useDispatch is a react-redux hook used to send actions to the redux store so as to change the application state when a user interacts with the application  */
  const dispatch = useDispatch();
  /**UseSelector is a react-redux hook which is used to obtain the current state of the application from the redux store */
  const { articles, pagination, loading, error } = useSelector(
    (state) => state.articles
  );
  useEffect(() => {
    if (!hasFetched) {
      dispatch(fetchArticles(pagination.page));
      hasFetched.current = true;
    }
  }, [dispatch, pagination.page]);

  const handlePageChange = (page) => {
    dispatch(fetchArticles(page));
    console.log(page);
  };
  console.log(articles);
  return (
    <Container size="xl" mt="md">
      {loading && <Loader />}
      {error&& <Text>{error}</Text>}
      <Grid gutter="md">
        {articles?.map((article) => {
          return (
            <Grid.Col key={article.id} span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
              <Card shadow="md" padding="md" radius="md" withBorder>
                <CardSection>
                  <Image
                    src={article.images}
                    height={160}
                    width={200}
                    alt="No image"
                    fit="cover"
                  />
                </CardSection>

                <Title order={6}>
                  Author:
                  <Text>{article.author.name}</Text>
                </Title>

                <Title order={6}>
                  Title:
                  <Text>{article.title}</Text>
                </Title>

                <Title order={6}>
                  Excerpt:
                  <Text size="sm" c="dimmed" lineClamp={3}>
                    {article.content}
                  </Text>
                </Title>

                <Button
                  color="blue"
                  fullWidth
                  mt="md"
                  justify="center"
                  radius="md"
                  onClick={() => navigate(`/article/${article.id}`)}
                >
                  Read More
                </Button>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>
      <Pagination
        total={pagination.pageCount}
        onChange={handlePageChange}
        value={pagination.page}
        siblings={1}
        boundaries={4}
      />
    </Container>
  );
};

export default Articles;
