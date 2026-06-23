const Flag = ({info}) => {
	const url = info.flags.png;

	return(
		<img src={url} alt={info.flags.alt} />
	)
}

export default Flag;
