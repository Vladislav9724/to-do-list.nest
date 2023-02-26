export class TaskDto {
  readonly id: string;
  readonly title: string;
  readonly body: string;
  readonly isCompleted: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
