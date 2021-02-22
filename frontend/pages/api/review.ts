import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type Data = {
  result: string
}

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {

  if(req.method === "POST") {
  var options = {
  method: 'POST',
  url: 'https://jsonbox.io/box_43a115f1d9c0daf91ac4',
  headers: {
    'Content-Type': 'application/json'
  },
  data: req.body
};

axios.request(options as any).then(function (response) {
  res.status(200).json({ result: 'success' })
}).catch(function (error) {
  console.error('error');
});

  }


}

