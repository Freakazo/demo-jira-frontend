export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateTaskInput = {
  description: Scalars['String'];
  title: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type FilterTaskInput = {
  assignedUserId?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  description__like?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  title__like?: InputMaybe<Scalars['String']>;
};

export enum Log_Type {
  AssigneeUpdate = 'ASSIGNEE_UPDATE',
  CreateDelete = 'CREATE_DELETE',
  EditDescription = 'EDIT_DESCRIPTION',
  EditTitle = 'EDIT_TITLE'
}

export type Mutation = {
  __typename?: 'Mutation';
  assignUserToTask: Task;
  createTask: Task;
  createUser: User;
  removeTask: Task;
  removeUser: User;
  unassignUserToTask: Task;
  updateTask: Task;
  updateUser: User;
};


export type MutationAssignUserToTaskArgs = {
  taskId: Scalars['Int'];
  userId: Scalars['Int'];
};


export type MutationCreateTaskArgs = {
  createTaskInput: CreateTaskInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationRemoveTaskArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int'];
};


export type MutationUnassignUserToTaskArgs = {
  taskId: Scalars['Int'];
  userId: Scalars['Int'];
};


export type MutationUpdateTaskArgs = {
  id: Scalars['Float'];
  updateTaskInput: UpdateTaskInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['Float'];
  updateUserInput: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  task: Task;
  tasks: Array<Task>;
  user: User;
  users: Array<User>;
};


export type QueryTaskArgs = {
  id: Scalars['Int'];
};


export type QueryTasksArgs = {
  filter?: InputMaybe<FilterTaskInput>;
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};

export type Task = {
  __typename?: 'Task';
  assignees: Array<User>;
  description: Scalars['String'];
  id: Scalars['Int'];
  logs: Array<TaskLog>;
  title: Scalars['String'];
};

export type TaskLog = {
  __typename?: 'TaskLog';
  id: Scalars['Int'];
  newValue?: Maybe<Scalars['String']>;
  prevValue?: Maybe<Scalars['String']>;
  task: Task;
  type: Log_Type;
  user?: Maybe<User>;
};

export type UpdateTaskInput = {
  description: Scalars['String'];
  title: Scalars['String'];
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  assignedTasks: Array<Task>;
  email: Scalars['String'];
  id: Scalars['Int'];
  username: Scalars['String'];
};
