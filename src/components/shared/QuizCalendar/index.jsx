import Calendar from 'react-calendar';
import './styles.css'

const QuizCalendar = ({ date, onChange }) => (
    <Calendar value={date} onChange={onChange} next2Label={null} prev2Label={null} />
);

export default QuizCalendar;
