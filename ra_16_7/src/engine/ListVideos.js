import React from 'react';
import moment from "moment";

const DateTime = props => {
    return (
        <p className="date">{props.date}</p>
    )
};

function DateTimePretty(props) {
  const makeDateTimePretty = (date) => {
    return moment(date).fromNow();
  };

  return <DateTime date={makeDateTimePretty(props.date)} />;
}

const Video = props => {
    return (
        <div className="video">
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <DateTimePretty date={props.date} />
        </div>
    )
};

const ListVideos = props => {
    return props.list.map(item => <Video key={item.ids} title={item.ids} url={item.url} date={item.date} />);
};

export { ListVideos }
