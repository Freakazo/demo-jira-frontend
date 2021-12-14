import BasePage from "../basePage";
import {Avatar, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import ImageIcon from '@mui/icons-material/Image';
import {useGetTasksQuery} from "./tasks.gen";
import {Link} from "react-router-dom";
import Badge from '@mui/material/Badge';
import PersonIcon from '@mui/icons-material/Person';
export default function TaskListView() {
  const {loading, error, data} = useGetTasksQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (!data) return <p>Empty</p>

  return (
    <BasePage
      body={<>
        <List sx={{width: '100%', bgcolor: 'background.paper'}}>
          {data.tasks.map(task => (
            <Link to={`/tasks/${task.id}/`} style={{
              textDecoration: 'inherit',
              color: 'inherit',
            }}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon/>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={task.title} secondary={task.description}/>
                <Badge badgeContent={task.assignees.length} color="primary">
                  <PersonIcon color="action" />
                </Badge>
              </ListItem>
            </Link>))}
        </List>
      </>}
    />
  )
}
