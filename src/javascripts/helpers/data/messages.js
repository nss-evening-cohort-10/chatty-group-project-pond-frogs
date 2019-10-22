let seedData = [
  {
    id: 'message1',
    message: 'Why was the JavaScript developer sad?</p><p>Because they didn’t Node how to Express themself',
    timestamp: 'July 4th, 1776 12:00 AM',
  },
  {
    id: 'message2',
    message: 'Why did the react class component feel relieved?</p><<So>Because it was now off the hook.',
    timestamp: 'Oct. 19th, 1973 6:15 AM',
  },
  {
    id: 'message3',
    message: 'How do you comfort a JavaScript bug?<So>You console it.',
    timestamp: 'Jan. 1st, 1983 6:19 PM',
  },
  {
    id: 'message4',
    message: 'And the bartender says, "Success, but you\'re not ready!" So a JavaScript function walks into a bar.',
    timestamp: 'Nov. 18th, 2012 2:52 PM',
  },
  {
    id: 'message5',
    message: 'Thanks for using ClapBack! Please type your message in the input field, change the color theme, or clear the page! Oh and you never respond back to      me!',
    timestamp: 'Oct. 19th, 12:11 PM',
  },

];

const messages = () => seedData.slice(Math.max(seedData.length - 20, 0));

const addMessage = (newMessage) => seedData.push(newMessage);

const clearMessages = () => {
  seedData = [];
};

export default {
  messages,
  addMessage,
  seedData,
  clearMessages,
};
