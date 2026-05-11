window.COMP346_DATA = [
  {
    "frequency": "Section A",
    "title": "Multiple Choice Questions",
    "items": [
      {
        "title": "Q1 Zero-Crossing Rate",
        "englishQuestion": "Which time-domain feature counts how often a signal crosses the horizontal axis and indicates noisy, high-frequency content?",
        "chineseQuestion": "哪个时域特征计算信号穿过水平轴的次数，并常表示噪声性、高频内容？",
        "englishAnswer": "Correct answer: C. Zero-Crossing Rate (ZCR). ZCR counts sign changes in the waveform, so noisy or high-frequency sounds usually have a higher ZCR.",
        "chineseAnswer": "正确答案：C。Zero-Crossing Rate (ZCR)。ZCR 统计波形符号变化/过零次数，因此噪声性强或高频成分多的声音通常 ZCR 更高。",
        "id": "a-q1",
        "marks": 1,
        "tag": "Audio features"
      },
      {
        "title": "Q2 Loudness",
        "englishQuestion": "Which statement best describes loudness in acoustics?",
        "chineseQuestion": "哪句话最准确描述声学中的 loudness？",
        "englishAnswer": "Correct answer: B. Loudness is the perceptual property of intensity, influenced by physical intensity but also by frequency, duration, and human hearing.",
        "chineseAnswer": "正确答案：B。Loudness 是人对强度的感知属性，受物理强度影响，也受频率、持续时间和听觉系统影响。",
        "id": "a-q2",
        "marks": 1,
        "tag": "Acoustics"
      },
      {
        "title": "Q3 Wide STFT Window",
        "englishQuestion": "What is the main consequence of using a very wide spectrogram window?",
        "chineseQuestion": "生成 spectrogram 时使用很宽的窗口，主要后果是什么？",
        "englishAnswer": "Correct answer: B. A wide window gives excellent frequency resolution but poor time resolution, because each frame covers a longer time span.",
        "chineseAnswer": "正确答案：B。宽窗口带来更好的频率分辨率，但时间分辨率更差，因为每一帧覆盖更长时间。",
        "id": "a-q3",
        "marks": 1,
        "tag": "STFT"
      },
      {
        "title": "Q4 Transients in Spectrograms",
        "englishQuestion": "How are transient sounds such as drum hits usually represented in a spectrogram?",
        "chineseQuestion": "鼓点等瞬态声音在 spectrogram 中通常如何表现？",
        "englishAnswer": "Correct answer: C. Transients appear as vertical spikes, because energy rises sharply over a short time across many frequencies.",
        "chineseAnswer": "正确答案：C。瞬态声音通常表现为垂直尖峰，因为能量在很短时间内、跨多个频率快速上升。",
        "id": "a-q4",
        "marks": 1,
        "tag": "Spectrograms"
      },
      {
        "title": "Q5 Median Filtering before SSM",
        "englishQuestion": "Why might a median filter be preferred over a moving average before computing an SSM?",
        "chineseQuestion": "计算 SSM 前，为什么 median filter 可能比 moving average 更合适？",
        "englishAnswer": "Correct answer: A. Median filtering smooths local noise while preserving sharp boundaries between homogeneous musical sections.",
        "chineseAnswer": "正确答案：A。Median filter 能平滑局部噪声，同时更好保留不同音乐段落之间的尖锐边界。",
        "id": "a-q5",
        "marks": 1,
        "tag": "Music structure"
      },
      {
        "title": "Q6 Global Threshold Risk",
        "englishQuestion": "What is the risk of using a strict global threshold on an SSM instead of an adaptive threshold?",
        "chineseQuestion": "对 SSM 使用严格 global threshold 而不用 adaptive threshold 的风险是什么？",
        "englishAnswer": "Correct answer: B. A global threshold can remove meaningful repetitions when volume, dynamics, or similarity levels vary across sections.",
        "chineseAnswer": "正确答案：B。当歌曲不同段落的音量、动态或相似度水平变化时，全局阈值可能错误删除结构上重要的重复。",
        "id": "a-q6",
        "marks": 1,
        "tag": "SSM"
      },
      {
        "title": "Q7 Tactus",
        "englishQuestion": "What is tactus in metrical structure?",
        "chineseQuestion": "metrical structure 中的 tactus 是什么？",
        "englishAnswer": "Correct answer: C. Tactus is the main perceived pulse level, often roughly 0.5 to 1.0 seconds per beat.",
        "chineseAnswer": "正确答案：C。Tactus 是主要感知到的拍点层级，通常每拍约 0.5 到 1.0 秒。",
        "id": "a-q7",
        "marks": 1,
        "tag": "Rhythm"
      },
      {
        "title": "Q8 CNN Blocks",
        "englishQuestion": "What happens when many Conv-ReLU-Pool blocks are stacked?",
        "chineseQuestion": "堆叠多个 Conv-ReLU-Pool 模块通常会发生什么？",
        "englishAnswer": "Correct answer: C. Spatial size in time/frequency decreases through pooling, while the number of learned feature channels usually increases.",
        "chineseAnswer": "正确答案：C。经过 pooling，时间/频率空间尺寸减小；同时学习到的特征通道数通常增加。",
        "id": "a-q8",
        "marks": 1,
        "tag": "Deep learning"
      },
      {
        "title": "Q9 Fingerprinting Specificity",
        "englishQuestion": "Where does audio identification/fingerprinting sit on the specificity-granularity plane?",
        "chineseQuestion": "Audio identification/fingerprinting 在 specificity-granularity 平面上属于哪里？",
        "englishAnswer": "Correct answer: B. It has high specificity and fragment-level granularity, because it identifies an exact track from short audio snippets.",
        "chineseAnswer": "正确答案：B。它是高 specificity、fragment-level granularity，因为它要从短片段中识别具体某一首歌。",
        "id": "a-q9",
        "marks": 1,
        "tag": "Fingerprinting"
      },
      {
        "title": "Q10 Teacher Forcing",
        "englishQuestion": "What is teacher forcing in autoregressive music generation?",
        "chineseQuestion": "自回归音乐生成中的 teacher forcing 是什么？",
        "englishAnswer": "Correct answer: D. During training, the model receives the ground-truth previous output as the next input, rather than its own previous prediction.",
        "chineseAnswer": "正确答案：D。训练时模型下一步输入使用真实的上一时刻输出，而不是模型自己上一时刻的预测。",
        "id": "a-q10",
        "marks": 1,
        "tag": "Generation"
      },
      {
        "title": "Q11 Down-Sampling",
        "englishQuestion": "Why is audio often down-sampled in music/audio research?",
        "chineseQuestion": "为什么音乐/音频研究中常把音频降采样？",
        "englishAnswer": "Correct answer: B. It speeds processing and saves storage, while very high-frequency content often carries less useful structural information for many MIR tasks.",
        "chineseAnswer": "正确答案：B。降采样能加快处理、节省空间；对许多 MIR 任务来说，特别高频的信息通常结构价值较小。",
        "id": "a-q11",
        "marks": 1,
        "tag": "Pre-processing"
      },
      {
        "title": "Q12 MIDI Pitch Frequency",
        "englishQuestion": "What is the frequency formula for MIDI pitch p when A4, pitch 69, is 440 Hz?",
        "chineseQuestion": "A4 是 MIDI pitch 69 且频率 440Hz 时，MIDI pitch p 的频率公式是什么？",
        "englishAnswer": "Correct answer: A. F(p) = 2^((p - 69) / 12) * 440. Each semitone changes frequency by a factor of 2^(1/12).",
        "chineseAnswer": "正确答案：A。F(p) = 2^((p - 69) / 12) * 440。每升高一个半音，频率乘以 2^(1/12)。",
        "id": "a-q12",
        "marks": 1,
        "tag": "Pitch"
      },
      {
        "title": "Q13 Fourier Theorem",
        "englishQuestion": "What does Fourier's Theorem say about complex periodic signals?",
        "chineseQuestion": "Fourier 定理对复杂周期信号说明了什么？",
        "englishAnswer": "Correct answer: A. Complex periodic signals can be represented as sums of sine waves with different frequencies, amplitudes, and phases.",
        "chineseAnswer": "正确答案：A。复杂周期信号可以表示为多个不同频率、幅度和相位的正弦波之和。",
        "id": "a-q13",
        "marks": 1,
        "tag": "Fourier"
      },
      {
        "title": "Q14 Hann Window",
        "englishQuestion": "Why is a Hann window preferred over a rectangular window in STFT?",
        "chineseQuestion": "STFT 中为什么 Hann window 通常优于 rectangular window？",
        "englishAnswer": "Correct answer: C. It tapers frame edges toward zero, reducing discontinuities and spectral leakage.",
        "chineseAnswer": "正确答案：C。Hann window 将帧边缘平滑到接近 0，减少边界突变和 spectral leakage。",
        "id": "a-q14",
        "marks": 1,
        "tag": "STFT"
      },
      {
        "title": "Q15 CQT",
        "englishQuestion": "Why is CQT often preferred over STFT for chord recognition and transcription?",
        "chineseQuestion": "为什么和弦识别和音乐转录中常用 CQT 而不是 STFT？",
        "englishAnswer": "Correct answer: A. CQT uses logarithmically spaced frequency bins that align better with musical pitch classes.",
        "chineseAnswer": "正确答案：A。CQT 的频率 bins 是对数间隔，更贴近音乐中的音高类别和半音结构。",
        "id": "a-q15",
        "marks": 1,
        "tag": "CQT"
      },
      {
        "title": "Q16 Self-Similarity Matrix",
        "englishQuestion": "What is the intuition behind an SSM in music structure analysis?",
        "chineseQuestion": "音乐结构分析中 SSM 的核心直觉是什么？",
        "englishAnswer": "Correct answer: B. It compares every time point with every other time point to reveal repeated or structurally similar regions.",
        "chineseAnswer": "正确答案：B。SSM 把每个时间点和所有其他时间点比较，用来发现重复或结构相似的区域。",
        "id": "a-q16",
        "marks": 1,
        "tag": "SSM"
      },
      {
        "title": "Q17 Transposition Invariant SSM",
        "englishQuestion": "How does a transposition-invariant SSM handle key modulation?",
        "chineseQuestion": "Transposition-invariant SSM 如何处理转调？",
        "englishAnswer": "Correct answer: C. It cyclically shifts chroma features through 12 pitch-class shifts and takes the best similarity across shifts.",
        "chineseAnswer": "正确答案：C。它对 chroma 特征做 12 种循环移位，并在所有移位中取最大相似度。",
        "id": "a-q17",
        "marks": 1,
        "tag": "Chroma"
      },
      {
        "title": "Q18 Onset vs Beat",
        "englishQuestion": "What is the difference between an onset and a beat?",
        "chineseQuestion": "onset 和 beat 的区别是什么？",
        "englishAnswer": "Correct answer: B. An onset is a physical event marking the start of a note or sound; a beat is a perceived regular pulse point in time.",
        "chineseAnswer": "正确答案：B。Onset 是音符或声音开始的物理事件；beat 是人感知到的规律性拍点。",
        "id": "a-q18",
        "marks": 1,
        "tag": "Rhythm"
      },
      {
        "title": "Q19 PLP",
        "englishQuestion": "How are frequency and phase determined in the PLP algorithm?",
        "chineseQuestion": "PLP 算法中 local pulse kernel 的频率和相位如何确定？",
        "englishAnswer": "Correct answer: D. Frequency comes from the dominant period in the tempogram, while phase is aligned using the novelty function.",
        "chineseAnswer": "正确答案：D。频率由 tempogram 中的主导周期决定；相位由 novelty function 对齐到实际 onset。",
        "id": "a-q19",
        "marks": 1,
        "tag": "Beat tracking"
      },
      {
        "title": "Q20 Imbalanced Dataset Accuracy",
        "englishQuestion": "What happens if a lazy classifier always predicts the majority class in a 990 Pop / 10 Jazz dataset?",
        "chineseQuestion": "在 990 首 Pop、10 首 Jazz 的不平衡数据集中，lazy model 总预测多数类会怎样？",
        "englishAnswer": "Correct answer: B. It achieves 99% accuracy, showing why accuracy alone is misleading for imbalanced datasets.",
        "chineseAnswer": "正确答案：B。它会得到 99% accuracy，这说明不平衡数据上只看 accuracy 会误导。",
        "id": "a-q20",
        "marks": 1,
        "tag": "Evaluation"
      },
      {
        "title": "Q21 Mid-Level Feature",
        "englishQuestion": "Which option best exemplifies a mid-level feature for bridging the semantic gap?",
        "chineseQuestion": "哪一项最像用于弥合 semantic gap 的 mid-level feature？",
        "englishAnswer": "Correct answer: C. Pitch- and beat-related descriptors, MFCCs, and chroma are between raw audio and high-level labels.",
        "chineseAnswer": "正确答案：C。音高/节拍相关描述符、MFCC、chroma 位于原始音频和高级语义标签之间。",
        "id": "a-q21",
        "marks": 1,
        "tag": "Music tagging"
      },
      {
        "title": "Q22 MAP",
        "englishQuestion": "Which metric evaluates the whole ranked list and rewards relevant items near the top?",
        "chineseQuestion": "哪个指标评估整个检索排序列表，并奖励相关结果排在前面？",
        "englishAnswer": "Correct answer: C. Mean Average Precision (MAP) evaluates ranking quality across the full list and rewards early relevant matches.",
        "chineseAnswer": "正确答案：C。Mean Average Precision (MAP) 评估整个排序列表，并奖励相关结果出现在靠前位置。",
        "id": "a-q22",
        "marks": 1,
        "tag": "Retrieval"
      },
      {
        "title": "Q23 Piano-Roll Timing",
        "englishQuestion": "Why does a standard piano-roll make expressive timing variations difficult?",
        "chineseQuestion": "为什么标准 piano-roll 难以表示 expressive timing variation？",
        "englishAnswer": "Correct answer: D. Its time axis is rigidly quantized into fixed steps, so micro-timing and gradual tempo changes are hard to represent.",
        "chineseAnswer": "正确答案：D。它的时间轴被固定量化成离散步长，因此很难表示微小时值偏移和渐变速度。",
        "id": "a-q23",
        "marks": 1,
        "tag": "Representation"
      },
      {
        "title": "Q24 Generative Music Benchmarks",
        "englishQuestion": "How do modern benchmarks like AI Song Contest evaluate generative music models?",
        "chineseQuestion": "AI Song Contest 等现代 benchmark 如何评估生成音乐模型？",
        "englishAnswer": "Correct answer: C. They use a multifaceted approach, combining quantitative analysis with qualitative human feedback.",
        "chineseAnswer": "正确答案：C。它们采用多维评估，结合定量分析和人类主观/定性反馈。",
        "id": "a-q24",
        "marks": 1,
        "tag": "Generation evaluation"
      },
      {
        "title": "Q25 MusicVAE Latent Space",
        "englishQuestion": "What is the generative advantage of a continuous latent space such as MusicVAE?",
        "chineseQuestion": "MusicVAE 这类连续 latent space 的生成优势是什么？",
        "englishAnswer": "Correct answer: C. It allows smooth interpolation between musical sequences, such as morphing one drum pattern into another.",
        "chineseAnswer": "正确答案：C。它允许在音乐序列之间平滑插值，例如把一个鼓点模式逐渐变形成另一个。",
        "id": "a-q25",
        "marks": 1,
        "tag": "MusicVAE"
      }
    ]
  },
  {
    "frequency": "Section B",
    "title": "Exercises and Calculation Questions",
    "items": [
      {
        "title": "Audio Feature Selection",
        "englishQuestion": "Choose one time-domain and one frequency-domain feature to distinguish a bright noisy cymbal crash from a deep warm bass guitar note.",
        "chineseQuestion": "选择一个时域特征和一个频域特征，区分明亮噪声性的镲片声和低沉温暖的贝斯音。",
        "englishAnswer": "Use ZCR as the time-domain feature: a cymbal crash has many rapid sign changes, so high ZCR; a bass note is smoother and lower frequency, so lower ZCR. Use spectral centroid as the frequency-domain feature: cymbal energy is concentrated higher in the spectrum, so high centroid; bass energy is low-frequency, so low centroid. RMSE could help with energy, but ZCR plus spectral centroid separates high-frequency noisy vs low-frequency tonal sounds more directly.",
        "chineseAnswer": "时域特征可选 ZCR：镲片声符号变化快、过零多，所以 ZCR 高；贝斯音更平滑、频率更低，所以 ZCR 低。频域特征可选 spectral centroid：镲片能量集中在高频，centroid 高；贝斯能量集中在低频，centroid 低。RMSE 可辅助表示能量，但 ZCR 加 spectral centroid 更直接地区分高频噪声和低频音调。",
        "id": "b-q1",
        "marks": 4,
        "tag": "Feature selection"
      },
      {
        "title": "Spectrogram Dimensionality",
        "englishQuestion": "For T = 2048 s, fs = 16 kHz, n_fft = 1024, hop = 512, no end padding, calculate frequency bins by time frames.",
        "chineseQuestion": "T = 2048 秒，fs = 16 kHz，n_fft = 1024，hop = 512，末尾不补零，计算 spectrogram 的频率 bins 和时间 frames。",
        "englishAnswer": "Samples L = T * fs = 2048 * 16000 = 32,768,000. Frequency bins for a real STFT are N/2 + 1 = 1024/2 + 1 = 513, including DC and Nyquist. Time frames = floor((L - N) / H) + 1 = floor((32,768,000 - 1,024) / 512) + 1 = 63,998 + 1 = 63,999. Final matrix: 513 x 63,999.",
        "chineseAnswer": "总采样点 L = T * fs = 2048 * 16000 = 32,768,000。实数 STFT 的频率 bins 为 N/2 + 1 = 1024/2 + 1 = 513，包括 DC 和 Nyquist。时间帧数 = floor((L - N) / H) + 1 = floor((32,768,000 - 1,024) / 512) + 1 = 63,998 + 1 = 63,999。最终矩阵维度：513 x 63,999。",
        "id": "b-q2",
        "marks": 5,
        "tag": "STFT calculation"
      },
      {
        "title": "Pairwise Classification for Structure Grouping",
        "englishQuestion": "Ground truth labels are [A, A, B, B, C], prediction is [1, 1, 1, 2, 3]. Compute TP, FP, FN, precision, recall.",
        "chineseQuestion": "真实标签 [A, A, B, B, C]，预测 [1, 1, 1, 2, 3]。计算 TP、FP、FN、precision、recall。",
        "englishAnswer": "All frame pairs are (0,1), (0,2), (0,3), (0,4), (1,2), (1,3), (1,4), (2,3), (2,4), (3,4). Ground-truth SAME pairs: (0,1), (2,3). Predicted SAME pairs: (0,1), (0,2), (1,2). TP = 1: (0,1). FP = 2: (0,2), (1,2). FN = 1: (2,3). Precision = TP/(TP+FP) = 1/3. Recall = TP/(TP+FN) = 1/2.",
        "chineseAnswer": "所有帧对为 (0,1), (0,2), (0,3), (0,4), (1,2), (1,3), (1,4), (2,3), (2,4), (3,4)。真实 SAME 对：(0,1), (2,3)。预测 SAME 对：(0,1), (0,2), (1,2)。TP = 1，即 (0,1)。FP = 2，即 (0,2), (1,2)。FN = 1，即 (2,3)。Precision = TP/(TP+FP) = 1/3。Recall = TP/(TP+FN) = 1/2。",
        "id": "b-q3",
        "marks": 8,
        "tag": "Evaluation"
      },
      {
        "title": "Deep Learning Troubleshooting",
        "englishQuestion": "An LSTM with binary piano-roll input cannot re-strike notes, loses long-term structure, and loops under greedy sampling. Explain causes and fixes.",
        "chineseQuestion": "使用 binary piano-roll 的 LSTM 不能重复击键、两小节后丢失结构、greedy sampling 产生循环。解释原因并提出改进。",
        "englishAnswer": "Cause 1: binary piano-roll represents note presence per grid step, so sustain and re-strike can look identical. Fix it with event-based tokens such as NOTE_ON, NOTE_OFF, TIME_SHIFT, VELOCITY, or explicit duration/onset channels. Cause 2: a plain LSTM has limited long-term memory for motifs and phrase structure. Fix it with attention/Transformer models, hierarchical generation, or latent models such as MusicVAE. Cause 3: greedy sampling always picks the most likely token, so it becomes deterministic and repetitive. Fix it with temperature sampling, top-k/top-p sampling, beam search with diversity, or conditioning on style/structure.",
        "chineseAnswer": "原因 1：binary piano-roll 只表示每个网格上音是否存在，延音和重新击键可能长得一样。可用 NOTE_ON、NOTE_OFF、TIME_SHIFT、VELOCITY 等 event-based token，或加入 duration/onset 通道。原因 2：普通 LSTM 对动机和乐句结构的长期记忆有限。可用 attention/Transformer、层次化生成，或 MusicVAE 等 latent model。原因 3：greedy sampling 每步都选最大概率 token，输出会确定且重复。可用 temperature、top-k/top-p sampling、多样性 beam search，或加入风格/结构条件。",
        "id": "b-q4",
        "marks": 8,
        "tag": "Generation troubleshooting"
      }
    ]
  },
  {
    "frequency": "Section C",
    "title": "Deep Dives",
    "items": [
      {
        "title": "The Audio Pipeline",
        "englishQuestion": "Explain the audio feature pipeline, framing/windowing, time-domain vs frequency-domain features, and feature engineering vs feature learning.",
        "chineseQuestion": "解释音频特征 pipeline、framing/windowing、时域与频域特征，以及 feature engineering 与 feature learning 的区别。",
        "englishAnswer": "Pipeline: start with a digital waveform, optionally down-sample, convert to mono, normalise, then split the signal into short overlapping frames. Framing assumes audio is locally stationary inside each short segment. Windowing multiplies each frame by a smooth function such as a Hann window so the frame edges taper to zero, reducing discontinuities and spectral leakage in the STFT. Time-domain features such as RMSE are computed directly from waveform samples and measure properties like energy. Frequency-domain features such as spectral centroid require an FFT/STFT first, then describe the distribution of energy across frequencies. Traditional feature engineering manually designs features, aggregates them with statistics, and feeds them to a classifier. Feature learning uses deep models, often CNNs or representation-learning models, to learn useful embeddings directly from waveforms, spectrograms, or mel/CQT representations, reducing the need for hand-designed descriptors.",
        "chineseAnswer": "流程：从数字波形开始，可先降采样、转 mono、归一化，然后把信号切成短的重叠帧。Framing 的假设是音频在短时间内近似平稳。Windowing 是把每帧乘以 Hann 等平滑窗，让边缘接近 0，从而减少 STFT 中的边界突变和 spectral leakage。时域特征如 RMSE 直接从波形采样点计算，表示能量等性质。频域特征如 spectral centroid 先要做 FFT/STFT，再描述频率上能量分布。传统 feature engineering 手动设计特征，再用统计量聚合后送入分类器。Feature learning 用深度模型，如 CNN 或表示学习模型，从 waveform、spectrogram、mel/CQT 等输入中自动学习 embedding，减少手工特征设计。",
        "id": "c-q1",
        "marks": 15,
        "tag": "Audio pipeline"
      },
      {
        "title": "Audio Fingerprinting Pipeline",
        "englishQuestion": "Explain constellation maps, spectral peaks, hash tokens, time difference, inverted lists, and matching.",
        "chineseQuestion": "解释 audio fingerprinting 中的 constellation map、spectral peak、hash token、时间差、inverted list 和匹配流程。",
        "englishAnswer": "Convert audio to an STFT magnitude spectrogram, then peak-pick local maxima to form a sparse constellation map. A peak at time t and frequency f is selected if its magnitude is greater than neighbouring bins inside a local time-frequency neighbourhood. Peaks are robust because strong local spectral maxima often survive noise, compression, and channel distortion. Hash tokens are built from pairs of peaks, for example (f1, f2, delta t), where delta t = t2 - t1. Delta time is used instead of absolute time because a query clip can start anywhere in the song; relative timing remains stable. In matching, each query hash looks up an inverted list mapping that hash to candidate track IDs and anchor times. The system accumulates votes for track and time-offset pairs. The correct track produces many consistent offsets, giving a strong peak in the vote histogram.",
        "chineseAnswer": "先把音频变成 STFT 幅度谱，再做 peak picking，把局部最大值保留下来形成稀疏的 constellation map。如果某个时间 t、频率 f 的幅度大于局部时频邻域内的邻居，就可选为 peak。选择 spectral peak 是因为强局部频谱峰在噪声、压缩和播放设备变化下通常仍较稳定。Hash token 可由峰对构成，例如 (f1, f2, delta t)，其中 delta t = t2 - t1。用时间差而不是绝对时间，是因为查询片段可能从歌曲任意位置开始，但相对时间关系保持稳定。匹配时，每个 query hash 通过 inverted list 查到候选 track ID 和 anchor time，然后对 track 和 time-offset 投票。正确歌曲会产生大量一致的时间偏移，vote histogram 中会出现明显峰值。",
        "id": "c-q2",
        "marks": 10,
        "tag": "Fingerprinting"
      }
    ]
  },
  {
    "frequency": "Section D",
    "title": "System Conceptualisation",
    "items": [
      {
        "title": "Adaptive AI Drummer Design",
        "englishQuestion": "Design an end-to-end Adaptive AI Drummer: beat tracking, generative MIDI drums, evaluation, and limitations.",
        "chineseQuestion": "设计一个 Adaptive AI Drummer：包括 beat tracking、MIDI 鼓生成、评估和局限。",
        "englishAnswer": "Audio analysis: down-sample and normalise the raw guitar/piano recording, compute STFT or mel spectrogram, derive an onset/novelty function, then estimate local tempo using a tempogram. Use PLP or a neural beat tracker trained on Dataset A to output a fluctuating beat grid, not a fixed metronome. Generative model: tokenise MIDI drum loops using event tokens such as DRUM_ON, TIME_SHIFT, VELOCITY, BAR, and STYLE/GENRE. Train a conditional Transformer or LSTM/Transformer hybrid on Dataset B. Condition generation on genre, beat positions, tempo curve, local energy, and possibly section labels, so drum events align with the extracted beat timestamps. Evaluation: beat tracking can use F-measure with a tolerance window around annotated beats, continuity metrics, and tempo error. Drum generation can use objective rhythm statistics, genre classifier agreement, diversity metrics, and human listening tests for realism, synchronisation, and style fit. Limitations: beat tracking may fail with rubato, weak onsets, syncopation, expressive timing, or noisy recordings. Generation may overfit common loops, ignore long-term song structure, or produce repetitive patterns. Ethical concerns include copyright/style imitation from training loops and misleading users about AI-generated accompaniment.",
        "chineseAnswer": "音频分析：先对原始吉他/钢琴录音降采样、归一化，计算 STFT 或 mel spectrogram，提取 onset/novelty function，再用 tempogram 估计局部 tempo。可使用 PLP 或在 Dataset A 上训练的神经 beat tracker，输出随人类演奏波动的 beat grid，而不是固定节拍器。生成模型：把 MIDI 鼓 loop tokenise 成 DRUM_ON、TIME_SHIFT、VELOCITY、BAR、STYLE/GENRE 等事件 token。在 Dataset B 上训练 conditional Transformer 或 LSTM/Transformer 混合模型。生成时以 genre、beat positions、tempo curve、local energy 和可能的段落标签作为条件，让鼓事件锁定到提取出的 beat timestamps。评估：beat tracking 可用带容忍窗口的 F-measure、continuity metrics 和 tempo error。鼓生成可用节奏统计、genre classifier agreement、多样性指标，以及人工听评的真实感、同步性和风格匹配。局限：rubato、弱 onset、切分节奏、强 expressive timing 或噪声录音会让 beat tracking 失败；生成模型可能过拟合常见 loop、忽略长期结构或输出重复。伦理问题包括训练 loop 的版权/风格模仿，以及没有明确标注 AI 生成伴奏。",
        "id": "d-q1",
        "marks": 25,
        "tag": "End-to-end design"
      }
    ]
  }
];
