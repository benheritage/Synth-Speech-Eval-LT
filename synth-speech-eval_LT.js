/***************************** 
 * Synth-Speech-Eval_Lt *
 *****************************/


/**
 * Headphones Check
 *   automatically added using version 1.3
 *   Mon Apr 27 2026 17:32:18 GMT+0100 (British Summer Time)
 *   https://run.pavlovia.org/sijiazhao/headphones-check
 * Sijia Zhao (2020-2021) sijia.zhao@psy.ox.ac.uk
 * Read LICENSE file before using:
 *   https://run.pavlovia.org/sijiazhao/headphones-check/LICENSE.txt
 */
import 'https://run.pavlovia.org/sijiazhao/headphones-check/headphonesCheck.js';

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.1.2.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;

// store info about the experiment session:
let expName = 'synth-speech-eval_LT';  // from the Builder filename that created this script
let expInfo = {
    'Paste Your Participant ID (copied from consent form)': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color('white'),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'scale-down',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(startRoutineBegin());
flowScheduler.add(startRoutineEachFrame());
flowScheduler.add(startRoutineEnd());
flowScheduler.add(informationRoutineBegin());
flowScheduler.add(informationRoutineEachFrame());
flowScheduler.add(informationRoutineEnd());
flowScheduler.add(explainationsRoutineBegin());
flowScheduler.add(explainationsRoutineEachFrame());
flowScheduler.add(explainationsRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);

flowScheduler.add(exit_routineRoutineBegin());
flowScheduler.add(exit_routineRoutineEachFrame());
flowScheduler.add(exit_routineRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

// Set up a Headphones Check
const headphonesCheck = new HeadphonesCheck({
  checkType: 'huggins',
  trialCount: 6,
  passMark: 6,
  maxAttempts: 2,
  volumeSound: 'https://run.pavlovia.org/sijiazhao/headphones-check/stimuli_HugginsPitch/HugginsPitch_calibration.flac',
  checkExample: 'https://run.pavlovia.org/sijiazhao/headphones-check/stimuli_HugginsPitch/HugginsPitch_example_2.flac',
  checkSounds: [
    {answer: 1, file: 'https://run.pavlovia.org/sijiazhao/headphones-check/stimuli_HugginsPitch/HugginsPitch_set1_1.flac'},
    {answer: 2, file: 'https://run.pavlovia.org/sijiazhao/headphones-check/stimuli_HugginsPitch/HugginsPitch_set1_2.flac'},
    {answer: 3, file: 'https://run.pavlovia.org/sijiazhao/headphones-check/stimuli_HugginsPitch/HugginsPitch_set1_3.flac'},
    {answer: 1, file: 'https://run.pavlovia.org/sijiazhao/headphones-check/stimuli_HugginsPitch/HugginsPitch_set2_1.flac'},
    {answer: 2, file: 'https://run.pavlovia.org/sijiazhao/headphones-check/stimuli_HugginsPitch/HugginsPitch_set2_2.flac'},
    {answer: 3, file: 'https://run.pavlovia.org/sijiazhao/headphones-check/stimuli_HugginsPitch/HugginsPitch_set2_3.flac'},
    {answer: 1, file: 'https://run.pavlovia.org/sijiazhao/headphones-check/stimuli_HugginsPitch/HugginsPitch_set3_1.flac'},
    {answer: 2, file: 'https://run.pavlovia.org/sijiazhao/headphones-check/stimuli_HugginsPitch/HugginsPitch_set3_2.flac'},
    {answer: 3, file: 'https://run.pavlovia.org/sijiazhao/headphones-check/stimuli_HugginsPitch/HugginsPitch_set3_3.flac'},
    {answer: 1, file: 'https://run.pavlovia.org/sijiazhao/headphones-check/stimuli_HugginsPitch/HugginsPitch_set4_1.flac'},
    {answer: 2, file: 'https://run.pavlovia.org/sijiazhao/headphones-check/stimuli_HugginsPitch/HugginsPitch_set4_2.flac'},
    {answer: 3, file: 'https://run.pavlovia.org/sijiazhao/headphones-check/stimuli_HugginsPitch/HugginsPitch_set4_3.flac'},
    {answer: 1, file: 'https://run.pavlovia.org/sijiazhao/headphones-check/stimuli_HugginsPitch/HugginsPitch_set5_1.flac'},
    {answer: 2, file: 'https://run.pavlovia.org/sijiazhao/headphones-check/stimuli_HugginsPitch/HugginsPitch_set5_2.flac'},
    {answer: 3, file: 'https://run.pavlovia.org/sijiazhao/headphones-check/stimuli_HugginsPitch/HugginsPitch_set5_3.flac'},
    {answer: 1, file: 'https://run.pavlovia.org/sijiazhao/headphones-check/stimuli_HugginsPitch/HugginsPitch_set6_1.flac'},
    {answer: 2, file: 'https://run.pavlovia.org/sijiazhao/headphones-check/stimuli_HugginsPitch/HugginsPitch_set6_2.flac'},
    {answer: 3, file: 'https://run.pavlovia.org/sijiazhao/headphones-check/stimuli_HugginsPitch/HugginsPitch_set6_3.flac'},
  ],
});

// Start the Headphones Check and then run handleHeadphonesCheckResult when complete
headphonesCheck.checkHeadphones(handleHeadphonesCheckResult);

// Handle the result of the Headphones Check:
// if passed, continue the study; if failed, stop the study
function handleHeadphonesCheckResult(result) {
  if (result) {
psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'conditions.csv', 'path': 'conditions.csv'},
    {'name': 'resources/col_0.wav', 'path': 'resources/col_0.wav'},
    {'name': 'resources/col_0.png', 'path': 'resources/col_0.png'},
    {'name': 'resources/col_1.wav', 'path': 'resources/col_1.wav'},
    {'name': 'resources/col_1.png', 'path': 'resources/col_1.png'},
    {'name': 'resources/col_2.wav', 'path': 'resources/col_2.wav'},
    {'name': 'resources/col_2.png', 'path': 'resources/col_2.png'},
    {'name': 'resources/col_3.wav', 'path': 'resources/col_3.wav'},
    {'name': 'resources/col_3.png', 'path': 'resources/col_3.png'},
    {'name': 'resources/col_4.wav', 'path': 'resources/col_4.wav'},
    {'name': 'resources/col_4.png', 'path': 'resources/col_4.png'},
    {'name': 'resources/col_5.wav', 'path': 'resources/col_5.wav'},
    {'name': 'resources/col_5.png', 'path': 'resources/col_5.png'},
    {'name': 'resources/dis_0.wav', 'path': 'resources/dis_0.wav'},
    {'name': 'resources/dis_0.png', 'path': 'resources/dis_0.png'},
    {'name': 'resources/dis_1.wav', 'path': 'resources/dis_1.wav'},
    {'name': 'resources/dis_1.png', 'path': 'resources/dis_1.png'},
    {'name': 'resources/dis_2.wav', 'path': 'resources/dis_2.wav'},
    {'name': 'resources/dis_2.png', 'path': 'resources/dis_2.png'},
    {'name': 'resources/dis_3.wav', 'path': 'resources/dis_3.wav'},
    {'name': 'resources/dis_3.png', 'path': 'resources/dis_3.png'},
    {'name': 'resources/dis_4.wav', 'path': 'resources/dis_4.wav'},
    {'name': 'resources/dis_4.png', 'path': 'resources/dis_4.png'},
    {'name': 'resources/dis_5.wav', 'path': 'resources/dis_5.wav'},
    {'name': 'resources/dis_5.png', 'path': 'resources/dis_5.png'},
    {'name': 'resources/loud_0.wav', 'path': 'resources/loud_0.wav'},
    {'name': 'resources/loud_0.png', 'path': 'resources/loud_0.png'},
    {'name': 'resources/loud_1.wav', 'path': 'resources/loud_1.wav'},
    {'name': 'resources/loud_1.png', 'path': 'resources/loud_1.png'},
    {'name': 'resources/loud_2.wav', 'path': 'resources/loud_2.wav'},
    {'name': 'resources/loud_2.png', 'path': 'resources/loud_2.png'},
    {'name': 'resources/loud_3.wav', 'path': 'resources/loud_3.wav'},
    {'name': 'resources/loud_3.png', 'path': 'resources/loud_3.png'},
    {'name': 'resources/loud_4.wav', 'path': 'resources/loud_4.wav'},
    {'name': 'resources/loud_4.png', 'path': 'resources/loud_4.png'},
    {'name': 'resources/loud_5.wav', 'path': 'resources/loud_5.wav'},
    {'name': 'resources/loud_5.png', 'path': 'resources/loud_5.png'},
    {'name': 'resources/mos_0.wav', 'path': 'resources/mos_0.wav'},
    {'name': 'resources/mos_0.png', 'path': 'resources/mos_0.png'},
    {'name': 'resources/mos_1.wav', 'path': 'resources/mos_1.wav'},
    {'name': 'resources/mos_1.png', 'path': 'resources/mos_1.png'},
    {'name': 'resources/mos_2.wav', 'path': 'resources/mos_2.wav'},
    {'name': 'resources/mos_2.png', 'path': 'resources/mos_2.png'},
    {'name': 'resources/mos_3.wav', 'path': 'resources/mos_3.wav'},
    {'name': 'resources/mos_3.png', 'path': 'resources/mos_3.png'},
    {'name': 'resources/mos_4.wav', 'path': 'resources/mos_4.wav'},
    {'name': 'resources/mos_4.png', 'path': 'resources/mos_4.png'},
    {'name': 'resources/mos_5.wav', 'path': 'resources/mos_5.wav'},
    {'name': 'resources/mos_5.png', 'path': 'resources/mos_5.png'},
    {'name': 'resources/noi_0.wav', 'path': 'resources/noi_0.wav'},
    {'name': 'resources/noi_0.png', 'path': 'resources/noi_0.png'},
    {'name': 'resources/noi_1.wav', 'path': 'resources/noi_1.wav'},
    {'name': 'resources/noi_1.png', 'path': 'resources/noi_1.png'},
    {'name': 'resources/noi_2.wav', 'path': 'resources/noi_2.wav'},
    {'name': 'resources/noi_2.png', 'path': 'resources/noi_2.png'},
    {'name': 'resources/noi_3.wav', 'path': 'resources/noi_3.wav'},
    {'name': 'resources/noi_3.png', 'path': 'resources/noi_3.png'},
    {'name': 'resources/noi_4.wav', 'path': 'resources/noi_4.wav'},
    {'name': 'resources/noi_4.png', 'path': 'resources/noi_4.png'},
    {'name': 'resources/noi_5.wav', 'path': 'resources/noi_5.wav'},
    {'name': 'resources/noi_5.png', 'path': 'resources/noi_5.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'resources/draw_green.png', 'path': 'resources/draw_green.png'},
    {'name': 'resources/draw_grey.png', 'path': 'resources/draw_grey.png'},
    {'name': 'resources/erase_green.png', 'path': 'resources/erase_green.png'},
    {'name': 'resources/erase_grey.png', 'path': 'resources/erase_grey.png'},
    {'name': 'resources/pause_image.png', 'path': 'resources/pause_image.png'},
    {'name': 'resources/play_image.png', 'path': 'resources/play_image.png'},
    {'name': 'resources/col_0.png', 'path': 'resources/col_0.png'},
    {'name': 'resources/col_0.wav', 'path': 'resources/col_0.wav'},
    {'name': 'resources/col_1.png', 'path': 'resources/col_1.png'},
    {'name': 'resources/col_1.wav', 'path': 'resources/col_1.wav'},
    {'name': 'resources/col_2.png', 'path': 'resources/col_2.png'},
    {'name': 'resources/col_2.wav', 'path': 'resources/col_2.wav'},
    {'name': 'resources/col_3.png', 'path': 'resources/col_3.png'},
    {'name': 'resources/col_3.wav', 'path': 'resources/col_3.wav'},
    {'name': 'resources/col_4.png', 'path': 'resources/col_4.png'},
    {'name': 'resources/col_4.wav', 'path': 'resources/col_4.wav'},
    {'name': 'resources/col_5.png', 'path': 'resources/col_5.png'},
    {'name': 'resources/col_5.wav', 'path': 'resources/col_5.wav'},
    {'name': 'resources/dis_0.png', 'path': 'resources/dis_0.png'},
    {'name': 'resources/dis_0.wav', 'path': 'resources/dis_0.wav'},
    {'name': 'resources/dis_1.png', 'path': 'resources/dis_1.png'},
    {'name': 'resources/dis_1.wav', 'path': 'resources/dis_1.wav'},
    {'name': 'resources/dis_2.png', 'path': 'resources/dis_2.png'},
    {'name': 'resources/dis_2.wav', 'path': 'resources/dis_2.wav'},
    {'name': 'resources/dis_3.png', 'path': 'resources/dis_3.png'},
    {'name': 'resources/dis_3.wav', 'path': 'resources/dis_3.wav'},
    {'name': 'resources/dis_4.png', 'path': 'resources/dis_4.png'},
    {'name': 'resources/dis_4.wav', 'path': 'resources/dis_4.wav'},
    {'name': 'resources/dis_5.png', 'path': 'resources/dis_5.png'},
    {'name': 'resources/dis_5.wav', 'path': 'resources/dis_5.wav'},
    {'name': 'resources/loud_0.png', 'path': 'resources/loud_0.png'},
    {'name': 'resources/loud_0.wav', 'path': 'resources/loud_0.wav'},
    {'name': 'resources/loud_1.png', 'path': 'resources/loud_1.png'},
    {'name': 'resources/loud_1.wav', 'path': 'resources/loud_1.wav'},
    {'name': 'resources/loud_2.png', 'path': 'resources/loud_2.png'},
    {'name': 'resources/loud_2.wav', 'path': 'resources/loud_2.wav'},
    {'name': 'resources/loud_3.png', 'path': 'resources/loud_3.png'},
    {'name': 'resources/loud_3.wav', 'path': 'resources/loud_3.wav'},
    {'name': 'resources/loud_4.png', 'path': 'resources/loud_4.png'},
    {'name': 'resources/loud_4.wav', 'path': 'resources/loud_4.wav'},
    {'name': 'resources/loud_5.png', 'path': 'resources/loud_5.png'},
    {'name': 'resources/loud_5.wav', 'path': 'resources/loud_5.wav'},
    {'name': 'resources/mos_0.png', 'path': 'resources/mos_0.png'},
    {'name': 'resources/mos_0.wav', 'path': 'resources/mos_0.wav'},
    {'name': 'resources/mos_1.png', 'path': 'resources/mos_1.png'},
    {'name': 'resources/mos_1.wav', 'path': 'resources/mos_1.wav'},
    {'name': 'resources/mos_2.png', 'path': 'resources/mos_2.png'},
    {'name': 'resources/mos_2.wav', 'path': 'resources/mos_2.wav'},
    {'name': 'resources/mos_3.png', 'path': 'resources/mos_3.png'},
    {'name': 'resources/mos_3.wav', 'path': 'resources/mos_3.wav'},
    {'name': 'resources/mos_4.png', 'path': 'resources/mos_4.png'},
    {'name': 'resources/mos_4.wav', 'path': 'resources/mos_4.wav'},
    {'name': 'resources/mos_5.png', 'path': 'resources/mos_5.png'},
    {'name': 'resources/mos_5.wav', 'path': 'resources/mos_5.wav'},
    {'name': 'resources/noi_0.png', 'path': 'resources/noi_0.png'},
    {'name': 'resources/noi_0.wav', 'path': 'resources/noi_0.wav'},
    {'name': 'resources/noi_1.png', 'path': 'resources/noi_1.png'},
    {'name': 'resources/noi_1.wav', 'path': 'resources/noi_1.wav'},
    {'name': 'resources/noi_2.png', 'path': 'resources/noi_2.png'},
    {'name': 'resources/noi_2.wav', 'path': 'resources/noi_2.wav'},
    {'name': 'resources/noi_3.png', 'path': 'resources/noi_3.png'},
    {'name': 'resources/noi_3.wav', 'path': 'resources/noi_3.wav'},
    {'name': 'resources/noi_4.png', 'path': 'resources/noi_4.png'},
    {'name': 'resources/noi_4.wav', 'path': 'resources/noi_4.wav'},
    {'name': 'resources/noi_5.png', 'path': 'resources/noi_5.png'},
    {'name': 'resources/noi_5.wav', 'path': 'resources/noi_5.wav'},
    {'name': 'conditions.csv', 'path': 'conditions.csv'},
  ]
});
  } else {
    document.body.innerHTML = '<div style="text-align: center; font-size: 2em; color: #000; background-color: #fff; padding: 1em; margin: 1em;">' + "The study has stopped<br>because you failed the headphones check." + '</div>';
    throw new Error('Headphones check failed. Study stopped.');
  }
}

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);

async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.2';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\\t';

  return Scheduler.Event.NEXT;
}

async function experimentInit() {
  // Initialize components for Routine "start"
  startClock = new util.Clock();
  button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button',
    text: 'START TEST',
    font: 'Arvo',
    pos: [0, 0],
    size: [0.4, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: 0,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  button.clock = new util.Clock();
  
  // Initialize components for Routine "information"
  informationClock = new util.Clock();
  next_page_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'next_page_2',
    text: 'NEXT',
    font: 'Arvo',
    pos: [0.7, (- 0.425)],
    size: [0.2, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'named',
    borderWidth: 0.0,
    opacity: null,
    depth: 0,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  next_page_2.clock = new util.Clock();
  
  info = new visual.TextBox({
    win: psychoJS.window,
    name: 'info',
    text: 'During this test you will be asked to highlight areas on a speech sample waveform that negatively affect a particular speech sound quality quality metric.\nTo listen to the audio press the 𝐏𝐋𝐀𝐘 button, this will play the speech sample on a loop. You can pause this by pressing the 𝐏𝐀𝐔𝐒𝐄 button.\nToggle between the 𝐃𝐑𝐀𝐖/𝐄𝐑𝐀𝐒𝐄 buttons to highlight the sections you deem important.\nPress 𝐍𝐄𝐗𝐓 to read the definitions of the speech quality metrics.',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, (- 0.1)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1.4, 0.6],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'named',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'top-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  info_title = new visual.TextBox({
    win: psychoJS.window,
    name: 'info_title',
    text: '𝐓𝐞𝐬𝐭 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0.3], 
    draggable: false,
    letterHeight: 0.07,
    lineSpacing: 1.0,
    size: [1.5, 0.4],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'named',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  // Initialize components for Routine "explainations"
  explainationsClock = new util.Clock();
  next_page = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'next_page',
    text: 'NEXT',
    font: 'Arvo',
    pos: [0.7, (- 0.425)],
    size: [0.2, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'named',
    borderWidth: 0.0,
    opacity: null,
    depth: 0,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  next_page.clock = new util.Clock();
  
  defs = new visual.TextBox({
    win: psychoJS.window,
    name: 'defs',
    text: '𝐎𝐯𝐞𝐫𝐚𝐥𝐥 𝐐𝐮𝐚𝐥𝐢𝐭𝐲: Overall subjective signal quality\n𝐍𝐨𝐢𝐬𝐢𝐧𝐞𝐬𝐬: Background, circuit, or coding noise\n𝐂𝐨𝐥𝐨𝐮𝐫𝐚𝐭𝐢𝐨𝐧:  Frequency response distortions\n𝐃𝐢𝐬𝐜𝐨𝐧𝐭𝐢𝐧𝐮𝐢𝐭𝐲: Isolated and non-stationary distortions\n𝐋𝐨𝐮𝐝𝐧𝐞𝐬𝐬: Speech volume affecting the overall quality',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, (- 0.1)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1.4, 0.6],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'named',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'top-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  defs_title = new visual.TextBox({
    win: psychoJS.window,
    name: 'defs_title',
    text: '𝐒𝐩𝐞𝐞𝐜𝐡 𝐒𝐨𝐮𝐧𝐝 𝐐𝐮𝐚𝐥𝐢𝐭𝐲 𝐃𝐞𝐟𝐢𝐧𝐢𝐭𝐢𝐨𝐧𝐬',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0.3], 
    draggable: false,
    letterHeight: 0.07,
    lineSpacing: 1.0,
    size: [1.0, 0.4],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'named',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  // Initialize components for Routine "sq_loc"
  sq_locClock = new util.Clock();
  progressBackground = new visual.Rect ({
    win: psychoJS.window, name: 'progressBackground', 
    width: [1.2, 0.1][0], height: [1.2, 0.1][1],
    ori: 0.0, 
    pos: [0, 0.1], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('gray'), 
    colorSpace: 'named', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  progressBar = new visual.Progress({
      win: psychoJS.window, name: 'progressBar',
      progress: 0,
      pos: [(- 0.6), 0.1], size: [1.2, 0.1], anchor: 'center-left', units: 'height',
      barColor: 'green', backColor: 'black', borderColor: 'black', colorSpace: 'named',
      lineWidth: 4.0, opacity: 1.0, ori: 0.0,
      depth: -1
  })
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.005), (- 0.19)], 
    draggable: false,
    size : [1.23, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  psychoJS.window.mouseVisible = true;
  var isPlaying = false;
  var isClicked = false;
  var isDrawing = true;
  var time = 0;
  var playButton = "null";
  var drawButton = "null";
  var eraseButton = "null";
  var dimension_text = "null";
  var q_num_var_text = "null";
  var myRectangles = "null";
  var myRectangleOutline = "null";
  var first_frame = true;
  const n_rects = 0;
  const width_overlay = 0;
  var highest_val_selected = -1;
  var lowest_val_selected = -1;
  var mySound = new sound.Sound({
    win: psychoJS.window,
    value: null,
    secs: -1,       
    loops: -1,      
    volume: 1.0
  });
  
  const overlay_opacities = []
  
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  q_num = new visual.TextStim({
    win: psychoJS.window,
    name: 'q_num',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.7), 0.4], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -6.0 
  });
  
  next_trial = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'next_trial',
    text: 'NEXT',
    font: 'Arvo',
    pos: [0.7, (- 0.425)],
    size: [0.2, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -7,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  next_trial.clock = new util.Clock();
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  slider = new visual.Slider({
    win: psychoJS.window, name: 'slider',
    startValue: 2,
    size: [1.0, 0.05], pos: [0, 0.125], ori: 0.0, units: psychoJS.window.units,
    labels: ["Not at all", "Slightly", "Somewhat", "Very", "Extremely"], fontSize: 0.03, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('darkgrey'), markerColor: new util.Color('green'), lineColor: new util.Color('darkgrey'), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  q_num_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'q_num_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.7), 0.4], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  next_trial_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'next_trial_2',
    text: 'NEXT',
    font: 'Arvo',
    pos: [0.7, (- 0.425)],
    size: [0.2, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  next_trial_2.clock = new util.Clock();
  
  any_feedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'any_feedback',
    text: 'Any additional comments?',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.05)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  input_comments = new visual.TextBox({
    win: psychoJS.window,
    name: 'input_comments',
    text: '',
    placeholder: 'Insert comments here...',
    font: 'Arial',
    pos: [0, (- 0.1)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1.0, 0.3],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'named',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: undefined,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'top-center',
    depth: -5.0 
  });
  
  // Initialize components for Routine "exit_routine"
  exit_routineClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'Thank you for participating.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

function startRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'start' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    startClock.reset();
    routineTimer.reset();
    startMaxDurationReached = false;
    // update component parameters for each repeat
    // reset button to account for continued clicks & clear times on/off
    button.reset()
    psychoJS.experiment.addData('start.started', globalClock.getTime());
    startMaxDuration = null
    // keep track of which components have finished
    startComponents = [];
    startComponents.push(button);
    
    for (const thisComponent of startComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function startRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'start' ---
    // get current time
    t = startClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *button* updates
    if (t >= 0 && button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button.tStart = t;  // (not accounting for frame time here)
      button.frameNStart = frameN;  // exact frame index
      
      button.setAutoDraw(true);
    }
    
    
    // if button is active this frame...
    if (button.status === PsychoJS.Status.STARTED) {
    }
    
    if (button.status === PsychoJS.Status.STARTED) {
      // check whether button has been pressed
      if (button.isClicked) {
        if (!button.wasClicked) {
          // store time of first click
          button.timesOn.push(button.clock.getTime());
          // store time clicked until
          button.timesOff.push(button.clock.getTime());
        } else {
          // update time clicked until;
          button.timesOff[button.timesOff.length - 1] = button.clock.getTime();
        }
        if (!button.wasClicked) {
          // end routine when button is clicked
          continueRoutine = false;
          
        }
        // if button is still clicked next frame, it is not a new click
        button.wasClicked = true;
      } else {
        // if button is clicked next frame, it is a new click
        button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button hasn't started / has finished
      button.clock.reset();
      // if button is clicked next frame, it is a new click
      button.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of startComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function startRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'start' ---
    for (const thisComponent of startComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('start.stopped', globalClock.getTime());
    psychoJS.experiment.addData('button.numClicks', button.numClicks);
    psychoJS.experiment.addData('button.timesOn', button.timesOn);
    psychoJS.experiment.addData('button.timesOff', button.timesOff);
    // the Routine "start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function informationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'information' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    informationClock.reset();
    routineTimer.reset();
    informationMaxDurationReached = false;
    // update component parameters for each repeat
    // reset next_page_2 to account for continued clicks & clear times on/off
    next_page_2.reset()
    psychoJS.experiment.addData('information.started', globalClock.getTime());
    informationMaxDuration = null
    // keep track of which components have finished
    informationComponents = [];
    informationComponents.push(next_page_2);
    informationComponents.push(info);
    informationComponents.push(info_title);
    
    for (const thisComponent of informationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function informationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'information' ---
    // get current time
    t = informationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *next_page_2* updates
    if (t >= 0 && next_page_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_page_2.tStart = t;  // (not accounting for frame time here)
      next_page_2.frameNStart = frameN;  // exact frame index
      
      next_page_2.setAutoDraw(true);
    }
    
    
    // if next_page_2 is active this frame...
    if (next_page_2.status === PsychoJS.Status.STARTED) {
    }
    
    if (next_page_2.status === PsychoJS.Status.STARTED) {
      // check whether next_page_2 has been pressed
      if (next_page_2.isClicked) {
        if (!next_page_2.wasClicked) {
          // store time of first click
          next_page_2.timesOn.push(next_page_2.clock.getTime());
          // store time clicked until
          next_page_2.timesOff.push(next_page_2.clock.getTime());
        } else {
          // update time clicked until;
          next_page_2.timesOff[next_page_2.timesOff.length - 1] = next_page_2.clock.getTime();
        }
        if (!next_page_2.wasClicked) {
          // end routine when next_page_2 is clicked
          continueRoutine = false;
          
        }
        // if next_page_2 is still clicked next frame, it is not a new click
        next_page_2.wasClicked = true;
      } else {
        // if next_page_2 is clicked next frame, it is a new click
        next_page_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if next_page_2 hasn't started / has finished
      next_page_2.clock.reset();
      // if next_page_2 is clicked next frame, it is a new click
      next_page_2.wasClicked = false;
    }
    
    // *info* updates
    if (t >= 0.0 && info.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      info.tStart = t;  // (not accounting for frame time here)
      info.frameNStart = frameN;  // exact frame index
      
      info.setAutoDraw(true);
    }
    
    
    // if info is active this frame...
    if (info.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *info_title* updates
    if (t >= 0.0 && info_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      info_title.tStart = t;  // (not accounting for frame time here)
      info_title.frameNStart = frameN;  // exact frame index
      
      info_title.setAutoDraw(true);
    }
    
    
    // if info_title is active this frame...
    if (info_title.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of informationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function informationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'information' ---
    for (const thisComponent of informationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('information.stopped', globalClock.getTime());
    psychoJS.experiment.addData('next_page_2.numClicks', next_page_2.numClicks);
    psychoJS.experiment.addData('next_page_2.timesOn', next_page_2.timesOn);
    psychoJS.experiment.addData('next_page_2.timesOff', next_page_2.timesOff);
    // the Routine "information" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function explainationsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'explainations' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    explainationsClock.reset();
    routineTimer.reset();
    explainationsMaxDurationReached = false;
    // update component parameters for each repeat
    // reset next_page to account for continued clicks & clear times on/off
    next_page.reset()
    psychoJS.experiment.addData('explainations.started', globalClock.getTime());
    explainationsMaxDuration = null
    // keep track of which components have finished
    explainationsComponents = [];
    explainationsComponents.push(next_page);
    explainationsComponents.push(defs);
    explainationsComponents.push(defs_title);
    
    for (const thisComponent of explainationsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function explainationsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'explainations' ---
    // get current time
    t = explainationsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *next_page* updates
    if (t >= 0 && next_page.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_page.tStart = t;  // (not accounting for frame time here)
      next_page.frameNStart = frameN;  // exact frame index
      
      next_page.setAutoDraw(true);
    }
    
    
    // if next_page is active this frame...
    if (next_page.status === PsychoJS.Status.STARTED) {
    }
    
    if (next_page.status === PsychoJS.Status.STARTED) {
      // check whether next_page has been pressed
      if (next_page.isClicked) {
        if (!next_page.wasClicked) {
          // store time of first click
          next_page.timesOn.push(next_page.clock.getTime());
          // store time clicked until
          next_page.timesOff.push(next_page.clock.getTime());
        } else {
          // update time clicked until;
          next_page.timesOff[next_page.timesOff.length - 1] = next_page.clock.getTime();
        }
        if (!next_page.wasClicked) {
          // end routine when next_page is clicked
          continueRoutine = false;
          
        }
        // if next_page is still clicked next frame, it is not a new click
        next_page.wasClicked = true;
      } else {
        // if next_page is clicked next frame, it is a new click
        next_page.wasClicked = false;
      }
    } else {
      // keep clock at 0 if next_page hasn't started / has finished
      next_page.clock.reset();
      // if next_page is clicked next frame, it is a new click
      next_page.wasClicked = false;
    }
    
    // *defs* updates
    if (t >= 0.0 && defs.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      defs.tStart = t;  // (not accounting for frame time here)
      defs.frameNStart = frameN;  // exact frame index
      
      defs.setAutoDraw(true);
    }
    
    
    // if defs is active this frame...
    if (defs.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *defs_title* updates
    if (t >= 0.0 && defs_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      defs_title.tStart = t;  // (not accounting for frame time here)
      defs_title.frameNStart = frameN;  // exact frame index
      
      defs_title.setAutoDraw(true);
    }
    
    
    // if defs_title is active this frame...
    if (defs_title.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of explainationsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function explainationsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'explainations' ---
    for (const thisComponent of explainationsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('explainations.stopped', globalClock.getTime());
    psychoJS.experiment.addData('next_page.numClicks', next_page.numClicks);
    psychoJS.experiment.addData('next_page.timesOn', next_page.timesOn);
    psychoJS.experiment.addData('next_page.timesOff', next_page.timesOff);
    // the Routine "explainations" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions.csv',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(sq_locRoutineBegin(snapshot));
      trialsLoopScheduler.add(sq_locRoutineEachFrame());
      trialsLoopScheduler.add(sq_locRoutineEnd(snapshot));
      trialsLoopScheduler.add(feedbackRoutineBegin(snapshot));
      trialsLoopScheduler.add(feedbackRoutineEachFrame());
      trialsLoopScheduler.add(feedbackRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function sq_locRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'sq_loc' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    sq_locClock.reset();
    routineTimer.reset();
    sq_locMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    gotValidClick = false; // until a click is received
    image.setImage(imagePath);
    playButton = new visual.ImageStim({
      win: psychoJS.window,
      name: 'playButton',
      image: "resources/play_image.png",
      pos: [-0.7, 0.1],
      size: [0.175, 0.175],
      autoDraw: true,
      interpolate: true
    });
    
    drawButton = new visual.ImageStim({
      win: psychoJS.window,
      name: 'playButton',
      image: "resources/draw_green.png",
      pos: [-0.7, -0.1],
      size: [0.175, 0.175],
      autoDraw: true,
      interpolate: true
    });
    
    eraseButton = new visual.ImageStim({
      win: psychoJS.window,
      name: 'playButton',
      image: "resources/erase_grey.png",
      pos: [-0.7, -0.3],
      size: [0.175, 0.175],
      autoDraw: true,
      interpolate: true
    });
    
    mySound = new sound.Sound({
      win: psychoJS.window,
      value: wavPath,
      secs: -1,
      loops: -1,
      volume: 1.0,
      autoLog: true
    });
    mySound.stop(); 
    mySound.status = PsychoJS.Status.NOT_STARTED; 
    
    n_rects = 200;
    width_overlay = 1.2;
    highest_val_selected = -1;
    lowest_val_selected = -1;
    
    isPlaying = false;
    isClicked = false;
    
    isDrawing = true;
    
    time = 0;
    progressBar.setProgress(0);
    
    myRectangleOutline =  new visual.Rect({
          win: psychoJS.window,
          name: 'myRectangle',
          width: width_overlay,
          height: 0.235,
          pos: [0, -0.17],
          ori: 0,
          lineWidth: 0,
          lineColor: new util.Color('red'),
          fillColor: new util.Color('red'),
          opacity: 0.0,
          depth: -12.0,
          interpolate: false,
          autoDraw: true
        });
    
    myRectangles = [];
    
    let sm_rect_w = width_overlay / n_rects; 
    for (let i = 0; i < n_rects; i++) {
        let rect = new visual.Rect({
          win: psychoJS.window,
          name: 'myRectangle',
          width: width_overlay/n_rects,
          height: 0.235,
          pos: [(sm_rect_w*(i+0.5))-(width_overlay)/2, -0.17],
          ori: 0,
          lineWidth: 0,
          lineColor: new util.Color('red'),
          fillColor: new util.Color('red'),
          opacity: 0.0,
          depth: -10.0,
          interpolate: false,
          autoDraw: true
        });
        myRectangles.push(rect);
    }
    
    first_frame = true;
    
    dimension_text = "Listen to the following speech sample and highlight all areas on the waveform that denote " + dimensions + ".";
    dimension_feedback_text = "To what extent did the important (" + dimensions + ") areas highlighted in the previous sample negatively influence your overall impression of the quality?"
    let num_trial = trials.thisN + 1
    q_num_var_text = "Q. (" + num_trial + ")";
    
    overlay_opacities = new Array(n_rects).fill(0);
    text.setText(dimension_text);
    q_num.setText(q_num_var_text);
    // reset next_trial to account for continued clicks & clear times on/off
    next_trial.reset()
    psychoJS.experiment.addData('sq_loc.started', globalClock.getTime());
    sq_locMaxDuration = null
    // keep track of which components have finished
    sq_locComponents = [];
    sq_locComponents.push(progressBackground);
    sq_locComponents.push(progressBar);
    sq_locComponents.push(mouse);
    sq_locComponents.push(image);
    sq_locComponents.push(text);
    sq_locComponents.push(q_num);
    sq_locComponents.push(next_trial);
    
    for (const thisComponent of sq_locComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function sq_locRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'sq_loc' ---
    // get current time
    t = sq_locClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *progressBackground* updates
    if (t >= 0.0 && progressBackground.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      progressBackground.tStart = t;  // (not accounting for frame time here)
      progressBackground.frameNStart = frameN;  // exact frame index
      
      progressBackground.setAutoDraw(true);
    }
    
    
    // if progressBackground is active this frame...
    if (progressBackground.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *progressBar* updates
    if (t >= 0 && progressBar.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      progressBar.tStart = t;  // (not accounting for frame time here)
      progressBar.frameNStart = frameN;  // exact frame index
      
      progressBar.setAutoDraw(true);
    }
    
    
    // if progressBar is active this frame...
    if (progressBar.status === PsychoJS.Status.STARTED) {
    }
    
    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if mouse is active this frame...
    if (mouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse.getPos();
          mouse.x.push(_mouseXYs[0]);
          mouse.y.push(_mouseXYs[1]);
          mouse.leftButton.push(_mouseButtons[0]);
          mouse.midButton.push(_mouseButtons[1]);
          mouse.rightButton.push(_mouseButtons[2]);
          mouse.time.push(mouse.mouseClock.getTime());
        }
      }
    }
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }
    
    
    // if image is active this frame...
    if (image.status === PsychoJS.Status.STARTED) {
    }
    
    if (first_frame) {
        first_frame = false;
        myRectangleOutline.draw();
        playButton.draw();
        drawButton.draw();
        eraseButton.draw();
        for (let i = 0; i < n_rects; i++) {
            myRectangles[i].draw();
        }
    }
    
    if (mouse.getPressed()[0] && playButton.contains(mouse)) {
        if (!isClicked) {
            isClicked = true;
            if (!isPlaying) {
                playButton.setImage("resources/pause_image.png");
                mySound = new sound.Sound({
                  win: psychoJS.window,
                  value: wavPath,
                  secs: -1,
                  loops: -1,
                  volume: 1.0,
                  autoLog: true
                });
                mySound.play();
                time = 0;
                isPlaying = true;
            } else {
                playButton.setImage("resources/play_image.png");
                mySound.stop();
                mySound.status = PsychoJS.Status.NOT_STARTED; 
                isPlaying = false;
            }
        }
    } else if (mouse.getPressed()[0] &&drawButton.contains(mouse)) {
        if (!isClicked) {
            isClicked = true;
            if (!isDrawing) {
                isDrawing = true;
                drawButton.setImage("resources/draw_green.png");
                eraseButton.setImage("resources/erase_grey.png");
            }
        }
    } else if (mouse.getPressed()[0] &&eraseButton.contains(mouse)) {
        if (!isClicked) {
            isClicked = true;
            if (isDrawing) {
                isDrawing = false;
                drawButton.setImage("resources/draw_grey.png");
                eraseButton.setImage("resources/erase_green.png");
            }
        }
    } else if (mouse.getPressed()[0] &&myRectangleOutline.contains(mouse)) {
        if (!isClicked) {
            isClicked = true;
        }
    
        let m_pos = mouse.getPos();
        let mouse_x = m_pos[0];
        let rel_x = mouse_x - myRectangleOutline.pos[0];
        let norm_x = (rel_x/width_overlay) + 0.5;
        let clicked_idx = Math.floor(norm_x * n_rects);
        clicked_idx = Math.max(0, Math.min(n_rects - 1, clicked_idx));
        
        if ((highest_val_selected === -1) && (lowest_val_selected === -1)) {
            highest_val_selected = clicked_idx;
            lowest_val_selected = clicked_idx;
        } else {
            if (clicked_idx > highest_val_selected) {
                highest_val_selected = clicked_idx;
            }
            if (clicked_idx < lowest_val_selected) {
                lowest_val_selected = clicked_idx;
            }
        }
    
        for (let draw_idx = lowest_val_selected; draw_idx <= highest_val_selected; draw_idx++) {
            if (isDrawing) {
                myRectangles[draw_idx].setOpacity(0.5);
                overlay_opacities[draw_idx] = 1;
            } else {
                myRectangles[draw_idx].setOpacity(0.0);
                overlay_opacities[draw_idx] = 0;
            }
        }
    
    } else {
        isClicked = false;
        highest_val_selected = -1;
        lowest_val_selected = -1;
    }
    
    if (isPlaying) {
        let totalDuration = mySound.getDuration();
        if (time > totalDuration) {
            time = 0;
        }
        let currentPos = time / totalDuration;
        progressBar.setProgress(currentPos); 
    }
        
    time = time + 1.0/psychoJS.window.getActualFrameRate();
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // if text is active this frame...
    if (text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *q_num* updates
    if (t >= 0.0 && q_num.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      q_num.tStart = t;  // (not accounting for frame time here)
      q_num.frameNStart = frameN;  // exact frame index
      
      q_num.setAutoDraw(true);
    }
    
    
    // if q_num is active this frame...
    if (q_num.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *next_trial* updates
    if (t >= 0 && next_trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_trial.tStart = t;  // (not accounting for frame time here)
      next_trial.frameNStart = frameN;  // exact frame index
      
      next_trial.setAutoDraw(true);
    }
    
    
    // if next_trial is active this frame...
    if (next_trial.status === PsychoJS.Status.STARTED) {
    }
    
    if (next_trial.status === PsychoJS.Status.STARTED) {
      // check whether next_trial has been pressed
      if (next_trial.isClicked) {
        if (!next_trial.wasClicked) {
          // store time of first click
          next_trial.timesOn.push(next_trial.clock.getTime());
          // store time clicked until
          next_trial.timesOff.push(next_trial.clock.getTime());
        } else {
          // update time clicked until;
          next_trial.timesOff[next_trial.timesOff.length - 1] = next_trial.clock.getTime();
        }
        if (!next_trial.wasClicked) {
          // end routine when next_trial is clicked
          continueRoutine = false;
          
        }
        // if next_trial is still clicked next frame, it is not a new click
        next_trial.wasClicked = true;
      } else {
        // if next_trial is clicked next frame, it is a new click
        next_trial.wasClicked = false;
      }
    } else {
      // keep clock at 0 if next_trial hasn't started / has finished
      next_trial.clock.reset();
      // if next_trial is clicked next frame, it is a new click
      next_trial.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of sq_locComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function sq_locRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'sq_loc' ---
    for (const thisComponent of sq_locComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('sq_loc.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse.x', mouse.x);
    psychoJS.experiment.addData('mouse.y', mouse.y);
    psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton);
    psychoJS.experiment.addData('mouse.midButton', mouse.midButton);
    psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton);
    psychoJS.experiment.addData('mouse.time', mouse.time);
    
    mySound.stop(); 
    
    for (let rect of myRectangles) {
        rect.setAutoDraw(false);
    }
    myRectangleOutline.setAutoDraw(false);
    playButton.setAutoDraw(false);
    drawButton.setAutoDraw(false);
    eraseButton.setAutoDraw(false);
    
    psychoJS.experiment.addData('audio_file', wavPath.toString());
    psychoJS.experiment.addData('dimension', dimensions.toString());
    psychoJS.experiment.addData('highlighted_states', overlay_opacities.toString().replace(/,/gi, " ");
    
    psychoJS.experiment.addData('next_trial.numClicks', next_trial.numClicks);
    psychoJS.experiment.addData('next_trial.timesOn', next_trial.timesOn);
    psychoJS.experiment.addData('next_trial.timesOff', next_trial.timesOff);
    // the Routine "sq_loc" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    feedbackClock.reset();
    routineTimer.reset();
    feedbackMaxDurationReached = false;
    // update component parameters for each repeat
    slider.reset()
    text_2.setText(dimension_feedback_text);
    q_num_2.setText(q_num_var_text);
    // reset next_trial_2 to account for continued clicks & clear times on/off
    next_trial_2.reset()
    input_comments.setText('');
    input_comments.refresh();
    psychoJS.experiment.addData('feedback.started', globalClock.getTime());
    feedbackMaxDuration = null
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(slider);
    feedbackComponents.push(text_2);
    feedbackComponents.push(q_num_2);
    feedbackComponents.push(next_trial_2);
    feedbackComponents.push(any_feedback);
    feedbackComponents.push(input_comments);
    
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback' ---
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slider* updates
    if (t >= 0.0 && slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider.tStart = t;  // (not accounting for frame time here)
      slider.frameNStart = frameN;  // exact frame index
      
      slider.setAutoDraw(true);
    }
    
    
    // if slider is active this frame...
    if (slider.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // if text_2 is active this frame...
    if (text_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *q_num_2* updates
    if (t >= 0.0 && q_num_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      q_num_2.tStart = t;  // (not accounting for frame time here)
      q_num_2.frameNStart = frameN;  // exact frame index
      
      q_num_2.setAutoDraw(true);
    }
    
    
    // if q_num_2 is active this frame...
    if (q_num_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *next_trial_2* updates
    if (t >= 0 && next_trial_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_trial_2.tStart = t;  // (not accounting for frame time here)
      next_trial_2.frameNStart = frameN;  // exact frame index
      
      next_trial_2.setAutoDraw(true);
    }
    
    
    // if next_trial_2 is active this frame...
    if (next_trial_2.status === PsychoJS.Status.STARTED) {
    }
    
    if (next_trial_2.status === PsychoJS.Status.STARTED) {
      // check whether next_trial_2 has been pressed
      if (next_trial_2.isClicked) {
        if (!next_trial_2.wasClicked) {
          // store time of first click
          next_trial_2.timesOn.push(next_trial_2.clock.getTime());
          // store time clicked until
          next_trial_2.timesOff.push(next_trial_2.clock.getTime());
        } else {
          // update time clicked until;
          next_trial_2.timesOff[next_trial_2.timesOff.length - 1] = next_trial_2.clock.getTime();
        }
        if (!next_trial_2.wasClicked) {
          // end routine when next_trial_2 is clicked
          continueRoutine = false;
          
        }
        // if next_trial_2 is still clicked next frame, it is not a new click
        next_trial_2.wasClicked = true;
      } else {
        // if next_trial_2 is clicked next frame, it is a new click
        next_trial_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if next_trial_2 hasn't started / has finished
      next_trial_2.clock.reset();
      // if next_trial_2 is clicked next frame, it is a new click
      next_trial_2.wasClicked = false;
    }
    
    // *any_feedback* updates
    if (t >= 0.0 && any_feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      any_feedback.tStart = t;  // (not accounting for frame time here)
      any_feedback.frameNStart = frameN;  // exact frame index
      
      any_feedback.setAutoDraw(true);
    }
    
    
    // if any_feedback is active this frame...
    if (any_feedback.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *input_comments* updates
    if (t >= 0.0 && input_comments.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      input_comments.tStart = t;  // (not accounting for frame time here)
      input_comments.frameNStart = frameN;  // exact frame index
      
      input_comments.setAutoDraw(true);
    }
    
    
    // if input_comments is active this frame...
    if (input_comments.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback' ---
    for (const thisComponent of feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('feedback.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider.response', slider.getRating());
    psychoJS.experiment.addData('slider.rt', slider.getRT());
    psychoJS.experiment.addData('next_trial_2.numClicks', next_trial_2.numClicks);
    psychoJS.experiment.addData('next_trial_2.timesOn', next_trial_2.timesOn);
    psychoJS.experiment.addData('next_trial_2.timesOff', next_trial_2.timesOff);
    psychoJS.experiment.addData('input_comments.text',input_comments.text)
    // the Routine "feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function exit_routineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exit_routine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    exit_routineClock.reset();
    routineTimer.reset();
    exit_routineMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS._saveResults = 0;
    let filename = psychoJS.experiment._experimentName + "_" + psychoJS._experiment._datetime + ".tsv";
    let dataObj = psychoJS._experiment._trialsData;
    let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
        return Object.values(it).toString()
    }).join("\n");
    
    console.log("Saving Data");
    fetch('https://pipe.jspsych.org/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
        },
        body: JSON.stringify({
            experimentID: 'QFT9r9qZvTy5',
            filename: filename,
            data: data,
        }),
    }).then (response => response.json()).then(data => {
        console.log(data);
        quitPsychoJS();
    })
    psychoJS.experiment.addData('exit_routine.started', globalClock.getTime());
    exit_routineMaxDuration = null
    // keep track of which components have finished
    exit_routineComponents = [];
    exit_routineComponents.push(text_3);
    
    for (const thisComponent of exit_routineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function exit_routineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exit_routine' ---
    // get current time
    t = exit_routineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    
    // if text_3 is active this frame...
    if (text_3.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of exit_routineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function exit_routineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exit_routine' ---
    for (const thisComponent of exit_routineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('exit_routine.stopped', globalClock.getTime());
    // the Routine "exit_routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}

async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}