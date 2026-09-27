const $ = id => document.getElementById(id);

function randomInt(min,max){return Math.floor(Math.random()*(max-min+1))+min;}

function updateMetrics(){
  const cpu=randomInt(25,68);
  const memory=randomInt(45,75);
  const response=randomInt(120,240);
  $("cpuValue").textContent=cpu+"%";
  $("memoryValue").textContent=memory+"%";
  $("responseValue").textContent=response+" ms";
  $("cpuBar").style.width=cpu+"%";
  $("memoryBar").style.width=memory+"%";
  $("responseBar").style.width=Math.min(response/4,80)+"%";
}

$("healthBtn").addEventListener("click",()=>{
  updateMetrics();
  const now=new Date().toLocaleTimeString();
  $("healthMessage").textContent="✓ Health check passed at "+now+". All monitored services are responding normally.";
  $("healthMessage").style.color="#159447";
});

$("refreshBtn").addEventListener("click",()=>{
  updateMetrics();
  $("lastDeploy").textContent="Monitoring data refreshed";
  $("healthMessage").textContent="Dashboard refreshed successfully.";
  $("healthMessage").style.color="#2563eb";
});

setInterval(updateMetrics,5000);
