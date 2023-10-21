import React, { useState } from "react";
import moment from "moment";

function DateTimePretty(props) {
  const makeDateTimePretty = (date) => {
    return moment(date).fromNow();
  };

  return <DateTime date={makeDateTimePretty(props.date)} />;
}

