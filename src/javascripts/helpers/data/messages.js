const seedData = [
  {
    id: 'message1',
    message: 'Why was the JavaScript developer sad?</p><p>Because they didn’t Node how to Express themself',
    timestamp: '',
  },
  {
    id: 'message2',
    message: 'Why did the react class component feel relieved?</p><p>Because it was now off the hook.',
    timestamp: '',
  },
  {
    id: 'message3',
    message: 'How do you comfort a JavaScript bug?</p><So>You console it.',
    timestamp: '',
  },
  {
    id: 'message4',
    message: 'And the bartender says, "Success, but you\'re not ready!" So a JavaScript function walks into a bar.',
    timestamp: '',
  },
  {
    id: 'message5',
    message: '<p>Thanks for using ClapBack! Please type your message in the input field, change the color theme, or clear the page!</p>',
    timestamp: '',
  },

];

const messages = () => seedData;

const addMessage = (newMessage) => seedData.push(newMessage);

// const deleteMessage = (id) => {
//   $('button').on('click').find(seedData.id).remove();
//   console.error(id);
// };

export default { messages, addMessage };
