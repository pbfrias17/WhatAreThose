import FileSystem from 'react-native-fs';
import Clarifai from 'clarifai';

encodeBase64 = (media) => {
    return FileSystem.readFile(media.uri, 'base64');
};

analyze = (base64, isVideo) => {
    console.log('analyzing...');

    const clarifai = new Clarifai.App({ 
        apiKey: 'e12b634847f14496918326ab5a2224d5'
    });

    return clarifai.models.predict(Clarifai.GENERAL_MODEL, { base64 }, { video: isVideo });
};

filter = (list, filterer, cap) => {

};

export { 
    encodeBase64,
    analyze,
    filter
};