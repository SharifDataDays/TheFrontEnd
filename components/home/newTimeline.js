import './timeline/VerticalTimeline.css';
import './timeline/VerticalTimelineElement.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from './timeline/index';

const constructTimeline = (items) => {
  return items.map((item, i) => {
    return (
      <VerticalTimelineElement
        key={i}
        contentStyle={{ background: '	#1EBDC1', color: '#003a42' }}
        contentArrowStyle={{ borderRight: '7px solid #1EBDC1' }}
        date={item.date}
        iconStyle={{ background: '#1EBDC1', color: '#003a42' }}
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
        paddingTop: 50,
        paddingBottom: 5,
        backgroundColor: '#252525',
      }}
    >
      <div style={{ width: '80%', margin: 'auto' }}>
        <VerticalTimeline layout="1-column">{constructTimeline(props.items)}</VerticalTimeline>
      </div>
    </div>
  );
};

export default Timeline;
