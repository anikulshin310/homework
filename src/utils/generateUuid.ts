export function generateUuid(): string {
  // (c) - опечатка? Не используешь значение
  return 'xxxx-xxxx-xxx-xxxx'.replace(/[x]/g, (c) => {
    const r = Math.floor(Math.random() * 16);
    return r.toString(16);
  });
}
