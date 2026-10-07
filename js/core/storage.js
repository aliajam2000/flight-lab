(function(F){'use strict';
const KEY='flightlab.state',VERSION=2;
const defaults=()=>({schemaVersion:VERSION,player:{xp:0},games:{},missions:{completed:[],bestScores:{},history:[]},achievements:[],settings:{sound:true,reducedMotion:false},activity:{lastGameId:null,lastLaunchAt:null,launchCounts:{},launchedGames:[]},meta:{demo:false,createdAt:new Date().toISOString()}});
function valid(s){return !!(s&&s.schemaVersion===VERSION&&s.player&&Number.isFinite(s.player.xp)&&s.games&&s.missions&&Array.isArray(s.achievements)&&s.settings&&s.activity&&s.activity.launchCounts)}
function load(){try{const raw=localStorage.getItem(KEY);if(!raw)return defaults();const s=JSON.parse(raw);if(!valid(s))throw Error('invalid');return s}catch(e){const s=defaults();try{localStorage.setItem(KEY,JSON.stringify(s))}catch(_){}return s}}
function save(s){s.schemaVersion=VERSION;localStorage.setItem(KEY,JSON.stringify(s));return s}
function reset(){const s=defaults();save(s);return s}
function exportJSON(){return JSON.stringify(load(),null,2)}
function importJSON(text){const s=JSON.parse(text);if(!valid(s))throw Error('Invalid or incompatible Flight Lab progress file');return save(s)}
F.Storage={KEY,VERSION,defaults,load,save,reset,exportJSON,importJSON};
})(window.FlightLab=window.FlightLab||{});
