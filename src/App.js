import React,{useEffect} from 'react'
import { BrowserRouter, Routes, Route,Navigate} from "react-router-dom";
import Login from './pages/Login'
import Schedule from './pages/Schedule'
import Recordings from './pages/Recordings'
import Classes from './pages/Classes'
import Profile from './pages/Profile'
import VideoAudioTesting from './pages/VideoAudioTesting'
import Settings from './pages/Settings'
import Terms from './pages/Terms';
import VideoStreaming from './pages/VideoStreaming'
import RecordingStreaming from './pages/RecordingStream';
import RequireAuth from './components/RequireAuth';
import Navbar from './components/Navbar';
import DownloadTranscipt from './pages/DownloadTranscript';
import StreamDev from './indevelopment/StreamDev';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

          <Route element={<RequireAuth />}>
            <Route path="/" element={<Schedule />} />
            <Route path="recordings">
              <Route index element={<Recordings />} />
              <Route path="term" element={<Terms />} />
              <Route path="stream" element={<RecordingStreaming />} />
            </Route>
            <Route path="classes">
              <Route index element={<Classes />} />
              <Route path="testing" element={<VideoAudioTesting />} />
              <Route path="stream" element={<VideoStreaming />} />
              <Route path="term" element={<Terms />} />
              <Route path="download-transcript" element={<DownloadTranscipt />} />
            </Route>
            <Route path="stream-dev" element={<StreamDev />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
