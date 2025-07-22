import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Card, Tag, Tooltip } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import type { ITask } from "../@customTypes/task";

type Props = {
  task: ITask;
  // updateTask: (id: string) => void;
};

const TaskItem: React.FC<Props> = ({ task }) => {
  return (
    <>
      <Card
        title={task.title}
        // style={{ width: 300 }}
        extra={
          <>
            <Tooltip title="edit">
              <Button
                href="/task/:id"
                type="default"
                color="default"
                variant="text"
                icon={<EditOutlined />}
              />
            </Tooltip>
            <Tooltip title="delete">
              <Button
                type="default"
                color="default"
                variant="text"
                icon={<DeleteOutlined />}
              />
            </Tooltip>
          </>
        }
      >
        <Paragraph>{task.description}</Paragraph>
        <Tag color="magenta">{task.tags.category}</Tag>
        <Tag color="red">{task.tags.priority}</Tag>
        <Tag color="blue">{task.tags.status}</Tag>
      </Card>
    </>
  );
};

export default TaskItem;
