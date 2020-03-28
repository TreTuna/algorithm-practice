export function mergeMeetings(meetings) {
  if (meetings.length < 2) {
    return meetings;
  }

  const sortedMeetings = JSON.parse(JSON.stringify(meetings)).sort((a, b) => {
    return a.startTime - b.startTime;
  });

  const results = [sortedMeetings[0]];

  for (let i = 1; i < sortedMeetings.length; i++) {
    const meeting = sortedMeetings[i];
    const currentMeeting = results[results.length - 1];
    if (
      meeting.startTime <= currentMeeting.endTime &&
      meeting.endTime > currentMeeting.endTime
    ) {
      currentMeeting.endTime = meeting.endTime;
    } else if (meeting.endTime > currentMeeting.endTime) {
      results.push(meeting);
    }
  }

  return results;
}
