// =====================================================================
// PIXEL AVATAR — drawn as a grid of letters. Edit PX to change the drawing,
// PAL to change colors. Each letter = one pixel.
//   b/B bandana edge/fill   c paisley dots   K hair   S/s skin / shade
//   E eye (drawn separately so it can blink)  P blush   M mouth
//   Y/y jacket / shade      H white shirt     . empty
// A dark outline is added automatically around the character.
// =====================================================================
const PX=["....bBBBBBBb....","...BBBcBBBBcBB..","..BBcBBBBBBBBcB.","..bbbbbbbbbbbb..","..KKSSSSSSSSKK..","..KSSSSSSSSSSK..","..KSSESSSSESSK..","..KSSESSSSESSK..","..KSPSSSSSSPSK..","..KSSSSMMSSSSK..","..KKSSSSSSSSKK..","...KKsssssssKK..","...KYYyHHyYYK...","..YYYYyHHyYYYY..","..YYYYyHHyYYYY..","..YYYYyHHyYYYY.."];
const PAL={b:"#4F271D",B:"#7A3F2E",c:"#F5E8D2",K:"#2A1A16",S:"#F2C29C",s:"#E3A982",P:"#F29A8A",M:"#C4635A",Y:"#F6E7A0",y:"#E3CF7C",H:"#FFFFFF",O:"#1B1210"};
function pxsvg(){var N=18,g=[],x,y,out="";
 for(y=0;y<N;y++){g[y]=[];for(x=0;x<N;x++)g[y][x]="."}
 PX.forEach(function(r,j){for(var i=0;i<16;i++){var c=r[i];g[j+1][i+1]=c=="E"?"S":c}});
 var o=[];for(y=0;y<N;y++){o[y]=g[y].slice();for(x=0;x<N;x++)if(g[y][x]=="."){var n=[[0,-1],[0,1],[-1,0],[1,0]].some(function(d){var yy=y+d[1],xx=x+d[0];return yy>=0&&yy<N&&xx>=0&&xx<N&&g[yy][xx]!="."});if(n)o[y][x]="O"}}
 for(y=0;y<N;y++){x=0;while(x<N){var c=o[y][x];if(c=="."){x++;continue}var e=x;while(e<N&&o[y][e]==c)e++;out+='<rect x="'+x+'" y="'+y+'" width="'+(e-x)+'" height="1" fill="'+PAL[c]+'"/>';x=e}}
 var E=PAL.O;
 out+='<g class="eo" fill="'+E+'"><rect x="6" y="7" width="1" height="2"/><rect x="11" y="7" width="1" height="2"/></g><g class="ec" fill="'+E+'"><rect x="5" y="8" width="2" height="1"/><rect x="10" y="8" width="2" height="1"/></g>';
 return '<svg class="av" viewBox="0 0 18 18" shape-rendering="crispEdges" aria-hidden="true">'+out+'</svg>'}
export const PIXEL_AVATAR_SVG=pxsvg();
