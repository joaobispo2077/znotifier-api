import { Content } from './content';

describe('Content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade');
    expect(content).toBeInstanceOf(Content);
    expect(content).toBeTruthy();
  });

  it('should NOT be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('j')).toThrow(
      'Content length must be between 5 and 240 characters.',
    );
  });

  it('should NOT be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('j'.repeat(241))).toThrow(
      'Content length must be between 5 and 240 characters.',
    );
  });
});
