import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from "@mui/lab/TimelineDot";
import {TaskLog} from "../graphql/graphqlTypes.gen";
import Typography from "@mui/material/Typography";

export interface TaskLogListProps {
  logs: Omit<TaskLog, 'task'>[]
}

export default function TaskLogList({logs}: TaskLogListProps) {
  return (
    <Timeline>
      {logs.map(l => (
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot/>
            <TimelineConnector/>
          </TimelineSeparator>
          <TimelineContent>
            {l.type}
            <Typography color='text.secondary'>{l.newValue}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

