# No Money, Why? - Expense Tracker

Single page Expense Tracker that tells you why you suddenly have no more money.

### Tech Used

- Vue.js 3
- SCSS
- Font Awesome Icons

### Planning & Development Process

#### User Stories

Stage one of planning for development of any application is always getting user stories. Placing yourself in the user's shoes helps determine what kind of functionality the application needs.

In the case of the expense tracker, users should be able to:

- See total current expenditure for the month (or filter to a specific month)
- Add expenses. Expenses should have (minimally):
  - description
  - date
  - category
- Edit expenses
- Delete expenses
- See list of current expenses
- See visualisation of percentage of money spent on a specific category for specified month
  - see total amount spent on specific category for specified month

#### Designing

Since this was my first time using Vue, I spent a lot of time researching data visualisation libraries, then conceptualizing a rough layout _Which I would rather not share because I think I'm the only one who understands my sketch/gibberish_. Of course I spent a bit of time figuring out the basics of Vue as well.

After doing a rough sketch, I usually pick a colour theme. Since this app is about tracking money, I did a bit of research, checking out good colours for banking apps/expense trackers. I found most of them to contain rather bright, welcoming colours, that pop off the page.

I figured since we're dealing with money, just choose a green-based theme. Headed to my go-to [colour palette generator](https://coolors.com/generate) and started fiddling. This is what I ended up with:

![palette](images/palette.png)

### Furthers

- Add budget/income section
- Connect to Firebase?
- Find better way to refactor files for better application performance
- see expenditure on specific day, range of dates, month, year
- Let user choose change chart visualisation type
- Let users add new categories
