import BasePage from "../basePage";
import {Card, CardContent, Chip, Divider} from "@mui/material";
import {useGetTaskQuery} from "./tasks.gen";
import Typography from "@mui/material/Typography";
import ErrorPage from "../errorPage";
import {useParams} from "react-router-dom";
import TaskLogList from "../../components/taskLogList";


export default function TaskPage() {
  const {id} = useParams()

  const {loading, error, data} = useGetTaskQuery({
    variables: {
      // @ts-ignore
      id: parseInt(id, 10),
    },
    skip: !id,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <ErrorPage message={error.message}/>;
  if (!data) return <ErrorPage message={"Task not found"}/>

  return (
    <BasePage
      body={<>
        <Card>
          <CardContent>
            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
              PT-{data.task.id}
            </Typography>
            <Typography variant="h5" component="div">
              {data.task.title}
            </Typography>
            <Typography sx={{mb: 1.5}} color="text.secondary">
              {data.task.assignees.map(u => <Chip label={u.username} />)}
            </Typography>
            <Typography variant="body2">
              {data.task.description}
              <br/>
            </Typography>
            <Divider sx={{mt: 10}} />
            <TaskLogList logs={data.task.logs}/>
          </CardContent>
        </Card>
      </>}
    />
  )
}
