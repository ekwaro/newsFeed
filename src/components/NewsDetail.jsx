import {
  Card,
  Image,
  Group,
  Title,
  Button,
  Text,
  Grid,
  CardSection,
  Badge,
  Flex,
} from "@mantine/core";
import { useEffect, useState } from "react";
//useSelector is used to get state data from the redux store
import { useSelector } from "react-redux";
/**useParams is used to get data which was contained on the url. This data is id for a specific item on the list
 * useNavigate is a react router hook that is used ued to programatically navigate from one component to the next
 */
import { useParams, useNavigate } from "react-router-dom";
const NewDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  //instantiate the useState hook so as to manage the individual state data
  const [data, setData] = useState({});
  const { articles } = useSelector((state) => state.articles);

  //useEffect is a react hook that runs when the application first launches so as to set the state data
  useEffect(() => {
    const article = articles.find((article) => article.id == params.id);
    setData(article);
  }, [params.id]);
  return (
    <Grid>
      <Grid.Col mx="lg" p="lg">
        <Card shadow="md" padding="md" radius="md" withBorder>
          <CardSection mx="md" mt="md">
            <Image src={data?.images} height="400" alt="No image" fit="cover" />
          </CardSection>
          <Group justify="flex-start" mt="lg">
            <Title order={6}>Category</Title>
            <Text>{data.category?.name}</Text>
          </Group>
          <Group justify="flex-start">
            <Title order={6}>Author</Title>
            <Text>{data.author?.name}</Text>
          </Group>
          <Group justify="flex-start">
            <Title order={6}>Title: </Title>
            <Text>{data.title}</Text>
          </Group>

          <Title order={6}>
            Excerpt:
            <Text size="sm" c="dimmed">
              {data.excerpt}
            </Text>
          </Title>

          <Title order={6}>
            Content:
            <Text size="sm" c="dimmed">
              {data.content}
            </Text>
          </Title>

          <Flex direction="row" justify="space-evenly" mt='md'>
            <Group>
              <Title order={6} fs="italic">
                Created At:{" "}
              </Title>
              <Badge>{data.createdAt}</Badge>
            </Group>
            <Group>
              <Title order={6} fs="italic">
                Published At:{" "}
              </Title>
              <Badge>{data.publishedAt}</Badge>
            </Group>

            <Group>
              <Title order={6} fs="italic">
                Updated At:{" "}
              </Title>
              <Badge>{data.updatedAt}</Badge>
            </Group>
          </Flex>

          <Button
            color="blue"
            fullWidth
            variant="transparent"
            mt="md"
            justify="center"
            radius="md"
            onClick={() => navigate("/articles")}
          >
            Go Back
          </Button>
        </Card>
      </Grid.Col>
    </Grid>
  );
};

export default NewDetails;
