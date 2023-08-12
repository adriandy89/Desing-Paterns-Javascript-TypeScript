class ColorSequenceGenerator {
    constructor() {
      this.colors = ['rojo', 'verde', 'azul', 'amarillo'];
    }
     static getInstance() {
      if (!ColorSequenceGenerator.instance) {
        ColorSequenceGenerator.instance = new ColorSequenceGenerator();
      }
      return ColorSequenceGenerator.instance;
    }
     generateSequence(length) {
      const sequence = [];
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * this.colors.length);
        sequence.push(this.colors[randomIndex]);
      }
      return sequence;
    }
  }
   function playGame() {
    const generator = ColorSequenceGenerator.getInstance();
    const sequence = generator.generateSequence(4); // Generate a sequence of length 4
     console.log('Memorize the following colors:');
    console.log(sequence);
     const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
     rl.question('Repeat the sequence: ', (userInput) => {
      const userSequence = userInput.trim().split(' ');
       // Check if the user sequence matches the generated sequence
      const isCorrect = JSON.stringify(sequence) === JSON.stringify(userSequence);
       if (isCorrect) {
        console.log('Congratulations! You repeated the sequence correctly.');
      } else {
        console.log("Oops! Your sequence doesn't match the generated sequence.");
      }
       rl.close();
    });
  }
   playGame();