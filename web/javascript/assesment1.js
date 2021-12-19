var storyItem = [
  "It was 94 fahrenheit outside, so Father Christmas went for a walk.When they got to Disneyland, they stared in horror for a few moments, then turned into a slug and crawled away.Bob saw the whole thing, but was not surprised — Father Christmas weighs 300 pounds, and it was a hot day.",
  "It was 94 fahrenheit outside, so Father Christmas went for a walk. When they got to the soup kitchen, they stared in horror for a few moments, then spontaneously combusted. Bob saw the whole thing, but was not surprised — Father Christmas weighs 300 pounds, and it was a hot day.",
  "It was 94 fahrenheit outside, so Big Daddy went for a walk. When they got to the White House, they stared in horror for a few moments, then spontaneously combusted. Bob saw the whole thing, but was not surprised — Big Daddy weighs 300 pounds, and it was a hot day.",
  "It was 94 fahrenheit outside, so Willy the Goblin went for a walk. When they got to the soup kitchen, they stared in horror for a few moments, then melted into a puddle on the sidewalk. Bob saw the whole thing, but was not surprised — Willy the Goblin weighs 300 pounds, and it was a hot day.",
  "It was 94 fahrenheit outside, so Big Daddy went for a walk. When they got to the White House, they stared in horror for a few moments, then turned into a slug and crawled away. Bob saw the whole thing, but was not surprised — Big Daddy weighs 300 pounds, and it was a hot day.",
  "It was 12 centigrade outside, so Willy the Goblin went for a walk. When they got to the White House, they stared in horror for a few moments, then spontaneously combusted. Bob saw the whole thing, but was not surprised — Willy the Goblin weighs 21 stone, and it was a hot day.",
  "It was 34 centigrade outside, so Willy the Goblin went for a walk. When they got to Disneyland, they stared in horror for a few moments, then spontaneously combusted. Bob saw the whole thing, but was not surprised — Willy the Goblin weighs 21 stone, and it was a hot day.",
  "It was 32 centigrade outside, so Father Christmas went for a walk. When they got to the soup kitchen, they stared in horror for a few moments, then melted into a puddle on the sidewalk. Bob saw the whole thing, but was not surprised — Father Christmas weighs 21 stone, and it was a hot day.",
  "It was 22 centigrade outside, so Father Christmas went for a walk. When they got to Disneyland, they stared in horror for a few moments, then melted into a puddle on the sidewalk. Bob saw the whole thing, but was not surprised — Father Christmas weighs 21 stone, and it was a hot day.",
];

function show() {
  if (document.getElementById("us").checked == true) {
    document.getElementById("story").style.background = "#ffc125";
    document.getElementById("story").innerHTML =
      storyItem[Math.floor(Math.random() * 5)];
  } else {
    document.getElementById("story").style.background = "#ffc125";
    document.getElementById("story").innerHTML =
      storyItem[Math.floor(Math.random() * 4) + 5];
  }
}
