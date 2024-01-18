import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './timeline.css';

function TimelineItem(
    { title, subtitle, description, date, icon }
) {
  return (
   
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#2C2C6C', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #2C2C6C' }}
          date={date}
          iconStyle={{ background: '#2C2C6C', color: '#fff', }}
          icon={icon}
        >
          <h3 className="vertical-timeline-element-title">{title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
          <p>
          {description}
          </p>
        </VerticalTimelineElement>
  );
}

export default TimelineItem;