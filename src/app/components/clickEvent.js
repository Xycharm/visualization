var obj;
export function SetObj(target) {
  obj = JSON.parse(JSON.stringify(target));
}

export function GetObj() {
  return obj;
}
