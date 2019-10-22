const seedData = [
  {
    message: 'Why was the JavaScript developer sad?</p><p>Because they didn’t Node how to Express themself',
    timestamp: '',
  },
  {
    message: 'Why did the react class component feel relieved?</p><p>Because it was now off the hook.',
    timestamp: '',
  },
  {
    message: 'How do you comfort a JavaScript bug?</p><So>You console it.',
    timestamp: '',
  },
  {
    message: 'And the bartender says, "Success, but you\'re not ready!" So a JavaScript function walks into a bar.',
    timestamp: '',
  },
  {
    message: '<p>Thanks for using ClapBack! Please type your message in the input field, change the color theme, or clear the page!</p>',
    timestamp: '',
  },

];

const messages = () => seedData;

const addMessage = (newMessage) => seedData.push(newMessage);

export default { messages, addMessage, seedData };
