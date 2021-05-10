type Props = {
  painted: boolean;
};

const Star = ({ painted }: Props) => {
  return (
    <div style={{ width: '20px' }}>
      <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <g id="countour">
            <path d="m2.41245,184.82088l189.83844,0l58.66154,-183.72615l58.66157,183.72615l189.83841,0l-153.58225,113.54771l58.66458,183.72615l-153.58231,-113.5508l-153.58228,113.5508l58.66459,-183.72615l-153.5823,-113.54771z" />
          </g>
        </defs>

        <use
          xlinkHref="#countour"
          fill={painted ? 'yellow' : 'transparent'}
          stroke="black"
        />
        <use
          xlinkHref="#countour"
          fill="transparent"
          stroke="black"
          strokeWidth="30"
        />

      </svg>
    </div>
  );
};

export default Star;
