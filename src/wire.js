import Segment from 'segment';

export default class Wire{

	constructor(args){
		this.segmentCountMin = 5;
		this.segmentCountMax = 10;
		this.startPoint = args.startPoint;
		this.segmentList = [];
		this.vertList = [];
		var segmentDiff = this.segmentCountMax - this.segmentCountMin;
		this.segmentCount = this.segmentCountMin + Math.round((Math.random() * segmentDiff));
		this.hue = Math.round(Math.random() * 359);
		this.color = `hsl(${this.hue}, 100%, 50%)`;

		var lastVert = this.startPoint,
			previousAngleStop = Math.round(-4 + (Math.random() * 7)),
			vert,
			segment;

		for(var i = 0; i < this.segmentCount; i++){
			segment = new Segment(previousAngleStop);
			vert = segment.getVert();
			this.segmentList.push(segment);
			this.vertList.push(
				segment.offsetVert(lastVert, vert)
			);
			previousAngleStop = segment.angleStop;
			lastVert = vert;
		}
	}
}
