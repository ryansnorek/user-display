export default function viewStudent(query, studentName, tags) {
    let view = true;
    const findQueryName = () => studentName.includes(query.name);
    const findQueryTag = () => tags.find((tag) => tag.includes(query.tag));
  
    if (query.name || query.tag) {
      let queryName = true;
      let queryTag = true;
  
      if (query.name) {
        queryName = findQueryName();
      }
      if (query.tag) {
        queryTag = findQueryTag();
      }
      if (!queryName || !queryTag) {
        view = false;
      }
    }
    return view;
  }
  