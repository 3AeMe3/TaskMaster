export function getStatus(tasks, status) {
  return tasks.filter((task) => task.status === status);
}

export function calcPercentage(part, whole) {
  return (part / whole) * 100;
}
