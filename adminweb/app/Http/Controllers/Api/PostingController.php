<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\View\Middleware\ShareErrorsFromSession;
use App\Posting;
use App\Http\Requests;
use App\Http\Controllers\Api\PostingController;

class PostingController extends \App\Http\Controllers\Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
         $postings = Posting::all();
         return $postings;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {   
        // $data = $request->json()->all();
        // $postings = new Posting;
        // $postings->jenis_kendaraan = $data['jenis_kendaraan'];
        // $postings->plat_nomor = $data['plat_nomor']; 
        // $postings->pelanggaran = $data['pelanggaran'];
        // // $postings->lastImage = base64_decode($request->lastImage);
        
        // //decode base64 string
        // $image = base64_decode($request->lastImage);
        // $png_url = "image-".time().".jpg";
        // $path = public_path() . "/img/" . $png_url;

        // Image::make($image->getRealPath())->save($path);


        // // $postings->lastImage = base64_decode("guntur.jpeg");
        // $success=$postings->save();
        $postings = Posting::create($request->json()->all());
        $success = $postings;   

        if(!$success) {
            return \Response::json(['message'=>"error saving"],500);
        } else { 
            
            return \Response::json(['message'=>"success"],200);
        }
    }

   

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
         $postings = Posting::where('slug',$plat_nomor)->first();
            if(!$postings){
                abort(404);
            }
           
            return view('postings.index')->with('postings', $postings);
             if(is_null($postings))
        {
            return Response::json("not found", 404);
        } return Response::json($postings,100);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $olddata = \App\Posting::find($id);
        $posting = \App\Posting::findOrFail($id);

        $rules = [
            'pelanggaran' => 'required',
            'jenis_kendaraan' => 'required',
            'plat_nomor' => 'required',
            'lastImage' => 'mimes:jpeg,jpg,bmp,png|max:10240',
        ];

        $messages = [
            'required' => 'Field harus di isi alias tidak boleh kosong',
            'max' => 'Ukuran photo maksimal 10 MB ',
            'mimes' => 'Photo harus berekstensi JPG, JPEG, BMP, atau PNG'
        ];

        $validator = Validator::make($request->all(), $rules, $messages);
        if ($validator->fails()) {
            return redirect() -> route('postings.create')->withErrors($validator)->withInput();
        }

        $data = $request->only('pelanggaran','jenis_kendaraan', 'plat_nomor');

        if ($request->hasFile('lastImage')){
            $data['lastImage'] = $this->savePhoto($request->file('lastImage'));
            if($posting->lastImage !== '') $this->deletePhoto($posting->lastImage);
        }

        $posting->update($data);
        $response = [
            'postings' => $posting
        ];
        return response()->json($response, 200);
    }

    public function deletePhoto($filename){
        $path = public_path() . DIRECTORY_SEPARATOR . 'img/'.$filename;
        return File::delete($path);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $posting = \App\Posting::find($id);
        if($posting->lastImage !== '') $this->deletePhoto($posting->lastImage);
        $posting->delete();
        $response = [
            'postings' => $posting
        ];
        return response()->json($response, 200);
    }
}
