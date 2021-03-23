export default function EI (item, salary) {
    if(item==="QC") {
        return Math.min(salary*1.18/100, 664.34);
    } else {
        return Math.min(salary*1.58/100, 889.54);
    }
};