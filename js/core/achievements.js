(function(F){
const defs=[
{id:'first-flight',name:'First Flight',desc:'Launch your first Flight Lab training experience.'},
{id:'explorer',name:'Explorer',desc:'Launch three different Flight Lab experiences.'},
{id:'three-labs',name:'Three Labs',desc:'Train in three distinct labs.'},
{id:'perfect-mission',name:'Perfect Mission',desc:'Earn 100 on a native Flight Lab mission.'},
{id:'safety-first',name:'Safety First',desc:'Earn full Safety points in a native mission.'}
];
F.Achievements={defs,unlock(s,id){if(defs.some(x=>x.id===id)&&!s.achievements.includes(id))s.achievements.push(id)},getUnlocked:s=>defs.filter(x=>s.achievements.includes(x.id))};
})(window.FlightLab=window.FlightLab||{});
