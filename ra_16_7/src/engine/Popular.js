import React from 'react';

function New(props) {
    return (
        <div className="wrap-item wrap-item-new">
            <span className="label">New!</span>
            {props.children}
        </div>
    )
};

function Popular(props) {
    return (
        <div className="wrap-item wrap-item-popular">
            <span className="label">Popular!</span>
            {props.children}
        </div>
    )
};

function withPopularOrNew(WrappedComponent) {
  const WithPopularOrNew = (props) => {
    const { views } = props;
    let Wrapper = '';
    if (views < 100) {
      Wrapper = New;
      return (
        <Wrapper>
          <WrappedComponent {...props} />
        </Wrapper>
      );	  
    };
	if (views >= 1000) {
      Wrapper = Popular;
      return (
        <Wrapper>
          <WrappedComponent {...props} />
        </Wrapper>
      );	  
    };
	return (
        <WrappedComponent {...props} />
    );
  };
  const displayName =
  WrappedComponent.displayName || WrappedComponent.name | 'Component';
  WithPopularOrNew.displayName = `WithPopularOrNew(${displayName})`;
  return WithPopularOrNew;
}

function Article(props) {
    return (
        <div className="item item-article">
            <h3><a href="#">{props.title}</a></h3>
            <p className="views">Прочтений: {props.views}</p>
        </div>
    )
};

function Video(props) {
    return (
        <div className="item item-video">
            <iframe key={props.index} src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <p className="views">Просмотров: {props.views}</p>
        </div>
    )
};

const PopularOrNewArticle = withPopularOrNew(Article);
const PopularOrNewVideo = withPopularOrNew(Video);

function List(props) {
  return props.list.map((item) => {
    switch (item.type) {
      case 'video':
        return <PopularOrNewVideo {...item} />;

      case 'article':
        return <PopularOrNewArticle {...item} />;
    }
  });
}

export { List };
