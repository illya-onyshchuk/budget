
 import Transaction from ".";

export default {
  title: 'Example/Transaction',
  component: Transaction,
};

const Template = (args) => <Transaction {...args} />

export const Income =  Template.bind({});
Income.args = {
  transaction: {
    comment: 'some income',
    value: 23, 
    date: '27.07.2023'
  },
}
