using Microsoft.AspNetCore.SignalR;
using System.IO;
using System.Threading;
using System.Threading.Tasks;

namespace omp.stream.server
{
    public class StreamingHub : Hub
    {
        private readonly IVideoCapture _videoCapture;

        public StreamingHub(IVideoCapture videoCapture)
        {
            _videoCapture = videoCapture;
        }

        public async Task SendFrame(object state)
        {
            // Capture a frame from the webcam
            var frame = _videoCapture.CaptureFrame();
            await Clients.All.SendAsync("ReceiveFrame", frame);
        }
    }
    public interface IVideoCapture
    {
        byte[] CaptureFrame();
    }

    public class WebcamVideoCapture : IVideoCapture
    {
        public byte[] CaptureFrame()
        {
            // Replace this with your own code to capture a frame from the webcam
            var frameData = File.ReadAllBytes("C:\\path\\to\\frame.jpg");
            return frameData;
        }
    }

}

