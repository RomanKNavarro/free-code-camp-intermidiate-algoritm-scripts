function spinalCase(title) {
  let titleArr = title.split(/(?=[A-Z])/).filter(letter => letter != '').map(letter => letter.toLowerCase()).join('-');
  let newArr = titleArr.match(/[a-z]+/g).join('-');
  console.log(newArr);
}
spinalCase("This Is Spinal Tap"); // this-is-spinal-tap
spinalCase("The_Andy_Griffith_Show") // the-andy-griffith-show
spinalCase("AllThe-small Things") // all-the-small-things
spinalCase("thisIsSpinalTap"); // this-is-spinal-tap

// COMPLETE AND SUCCESSFUL