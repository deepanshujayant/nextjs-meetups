import { MongoClient } from "mongodb";

const handler = async (req, res) => {
	if (req.method === "POST") {
		const data = req.body;

		const { title, image, address, descprition } = data;
		const client = await MongoClient.connect(
			"mongodb+srv://deepanshu97:1997deepu@cluster0.8lglf.mongodb.net/meetups?retryWrites=true&w=majority"
		);
		const db = client.db();
		const meetupsCollection = db.collection("meetups");
		// const result = await meetupsCollection.insertOne(data);
		client.close();
		
		res.status(201).json({message: "Meetup Inserted!"})
	}
};

export default handler;
