export const setCoursePartsFinished = (tocData, slidesVisited) => {
  for (let chapterNumber in tocData.chapters) {
    let chapter = tocData.chapters[chapterNumber];
    chapter.finished = true;
    for (let sectionNumber in chapter.sections) {
      let section = chapter.sections[sectionNumber];
      section.finished = true;
      for (let activityNumber in section.activities) {
        let activity = section.activities[activityNumber];
        activity.finished = true;
        for (let pageNumber in activity.pages) {
          let page = activity.pages[pageNumber];
          activity.finished = slidesVisited.includes(page);
          if (activity.finished === false) {
            break;
          }
        }
        if (activity.finished === false) {
          chapter.finished = section.finished = false;
        }
      }
      if (section.finished === false) {
        chapter.finished = false;
      }
    }
  }
};

export const setTotalPages = tocData => {
  let count = 0;
  for (let chapterNumber in tocData.chapters) {
    let chapter = tocData.chapters[chapterNumber];
    for (let sectionNumber in chapter.sections) {
      let section = chapter.sections[sectionNumber];
      for (let activityNumber in section.activities) {
        let activity = section.activities[activityNumber];
        activity.finished = true;
        count += activity.pages.length;
      }
    }
  }
  tocData.totalPagesInCourse = count;
};
