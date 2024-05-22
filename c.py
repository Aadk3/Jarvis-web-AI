import os
import soundfile as sf
from tqdm import tqdm

def convert_aif_to_wav(input_file, output_file):
    # Read AIF file
    data, samplerate = sf.read(input_file)
    
    # Write WAV file
    sf.write(output_file, data, samplerate, format='WAV', subtype='PCM_16')

def convert_all_aif_to_wav(input_folder):
    # Create output directory
    output_dir = os.path.join(os.path.dirname(input_folder), 'jarvis-voice')
    os.makedirs(output_dir, exist_ok=True)
    
    # Get list of AIF files in the input folder
    aif_files = [f for f in os.listdir(input_folder) if f.endswith('.aif') or f.endswith('.aiff')]
    
    # Convert each AIF file to WAV
    for i, aif_file in enumerate(tqdm(aif_files, desc="Converting files", unit="file")):
        input_file = os.path.join(input_folder, aif_file)
        output_file = os.path.join(output_dir, f"{i}.wav")
        convert_aif_to_wav(input_file, output_file)
        tqdm.write(f"Conversion of {aif_file} complete. WAV file saved as '{output_file}'.")

def main():
    # Input folder containing AIF files
    input_folder = "/workspaces/codespaces-jupyter/aa"
    
    # Convert all AIF files to WAV
    convert_all_aif_to_wav(input_folder)
    print("All conversions complete.")

if __name__ == "__main__":
    main()