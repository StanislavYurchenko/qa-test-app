export const transformAnswers = answers => {
  const entries = Object.entries(answers);
  return entries.map(([id, answer]) => ({ questionId: Number(id), answer }));
};
