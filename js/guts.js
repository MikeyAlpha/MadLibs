function runMadlibs(text, boy_name_1, noun_1, occupation_1, measurement_1, noun_2, adjective_1, game_1, adjective_2, plural_noun, verb_ing_1) {

  // YOUR CODE GOES HERE:
    noun_1 = noun_1.replace(/ NOUN-1/g, " "+noun_1);
    occupation_1 = occupation_1.replace(/OCCUPATION-1/g, " "+occupation_1);
    text = text.replace(/ NAME-1/g, " "+boy_name_1);
  return text;

  
}