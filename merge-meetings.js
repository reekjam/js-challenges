// Given an array of tuples, merge them if they overlap
const meetingMerge = (meetings) => {
  const sorted = meetings.sort((x, y) => {
    if (x[0] < y[0]) { return -1 };
    if (x[0] > y[0]) { return 1 };

    return 0;
  });

  let merged = [sorted[0]];

  sorted.slice(1).forEach(([startTime, endTime]) => {
    if (startTime <= merged[merged.length - 1][1]) {
      merged[merged.length - 1][1] = Math.max(endTime, merged[merged.length - 1][1]);
    } else {
      merged.push([startTime, endTime]);
    };
  });

  return merged;
};

module.exports = meetingMerge;
