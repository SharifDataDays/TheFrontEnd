import './timeline/VerticalTimeline.css';
import './timeline/VerticalTimelineElement.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem } from '@fortawesome/free-solid-svg-icons';
import { Header } from 'semantic-ui-react';
import { VerticalTimeline, VerticalTimelineElement } from './timeline/index';

const constructTimeline = (items) => {
  return items.map((item, i) => {
    return (
      <VerticalTimelineElement
        key={i}
        contentStyle={{ background: '#1d93f7', color: 'white' }}
        contentArrowStyle={{ borderRight: '7px solid white' }}
        date={item.date}
        iconStyle={{ background: '#1d93f7', color: 'white' }}
        icon={<FontAwesomeIcon icon={faGem} style={{ fontSize: 20 }} />}
      >
        <div style={{ direction: 'rtl' }}>
          <h3 className="vertical-timeline-element-title">{item.heading}</h3>
          <p>{item.text}</p>
        </div>
      </VerticalTimelineElement>
    );
  });
};

const Timeline = (props) => {
  return (
    <div
      style={{
        width: '100%',
        paddingTop: 20,
      }}
    >
      <Header textAlign="center" as="h1">
        {'زمان بندی'}
      </Header>
      <div style={{ width: '80%', margin: 'auto' }}>
        <VerticalTimeline>{constructTimeline(props.items)}</VerticalTimeline>
      </div>
    </div>
  );
};

export default Timeline;
