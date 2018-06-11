const expect = require('expect');

const {generateMessage} = require('./message.js');

describe('generateMessage', () => {
  it ('should generate correct message object', () => {
    const message = generateMessage('Admin', 'Welcome new user');
    expect(message.from).toBe('Admin');
    expect(message.text).toBe('Welcome new user');
    expect(message.createdAt).toBeTruthy();
  });
});