window.COMP346_DATA = [
  {
    "frequency": "Section A",
    "title": "Multiple Choice Questions",
    "module": "Simulation Exam",
    "items": [
      {
        "title": "Q1 Zero-Crossing Rate",
        "englishQuestion": "Which time-domain feature counts how often a signal crosses the horizontal axis and indicates noisy, high-frequency content?",
        "chineseQuestion": "哪个时域特征计算信号穿过水平轴的次数，并常表示噪声性、高频内容？",
        "options": [
          {
            "label": "A",
            "english": "Root-mean-square energy (RMSE)",
            "chinese": "均方根能量（RMSE）"
          },
          {
            "label": "B",
            "english": "Amplitude Envelope (AE)",
            "chinese": "振幅包络（AE）"
          },
          {
            "label": "C",
            "english": "Zero-Crossing Rate (ZCR)",
            "chinese": "过零率（ZCR）"
          },
          {
            "label": "D",
            "english": "Spectral Centroid (SC)",
            "chinese": "频谱质心（SC）"
          }
        ],
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
        "options": [
          {
            "label": "A",
            "english": "It is an objective measurement of intensity as sound power per unit area.",
            "chinese": "它是把强度作为单位面积声功率来测量的客观量。"
          },
          {
            "label": "B",
            "english": "It is the perceptual property of intensity that is influenced by duration and frequency.",
            "chinese": "它是人对强度的感知属性，会受持续时间和频率影响。"
          },
          {
            "label": "C",
            "english": "It is solely determined by the fundamental frequency of the sound wave.",
            "chinese": "它只由声波的基频决定。"
          },
          {
            "label": "D",
            "english": "It is directly proportional to the peak deviation of the sinusoid from its mean.",
            "chinese": "它与正弦波相对均值的峰值偏移成正比。"
          }
        ],
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
        "options": [
          {
            "label": "A",
            "english": "It improves both time and frequency resolution simultaneously.",
            "chinese": "它同时提高时间分辨率和频率分辨率。"
          },
          {
            "label": "B",
            "english": "It results in excellent frequency resolution but poor time resolution.",
            "chinese": "它带来很好的频率分辨率，但时间分辨率较差。"
          },
          {
            "label": "C",
            "english": "It causes severe spectral leakage due to sharp edges at the boundaries.",
            "chinese": "它会因边界尖锐而造成严重 spectral leakage。"
          },
          {
            "label": "D",
            "english": "It perfectly aligns the frequency bins with Western musical pitch classes.",
            "chinese": "它会让频率 bins 与西方音乐 pitch classes 完美对齐。"
          }
        ],
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
        "options": [
          {
            "label": "A",
            "english": "As stacks of horizontal lines.",
            "chinese": "表现为一叠水平线。"
          },
          {
            "label": "B",
            "english": "As localized energy blobs.",
            "chinese": "表现为局部能量块。"
          },
          {
            "label": "C",
            "english": "As vertical spikes.",
            "chinese": "表现为垂直尖峰。"
          },
          {
            "label": "D",
            "english": "As smooth sinusoidal curves spanning the x-axis.",
            "chinese": "表现为沿 x 轴延伸的平滑正弦曲线。"
          }
        ],
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
        "options": [
          {
            "label": "A",
            "english": "Median filtering better preserves sharp edges between different homogeneous regions.",
            "chinese": "Median filtering 更能保留不同同质区域之间的尖锐边界。"
          },
          {
            "label": "B",
            "english": "Median filtering automatically downsamples the feature rate to match the hierarchical level of a macro structure.",
            "chinese": "Median filtering 会自动降低特征帧率以匹配宏观结构层级。"
          },
          {
            "label": "C",
            "english": "Median filtering smooths high-dimensional timbral features into lower-dimensional regions for segmentation.",
            "chinese": "Median filtering 会把高维音色特征平滑成低维区域用于分段。"
          },
          {
            "label": "D",
            "english": "Median filtering cyclically shifts the features to instantly achieve transposition invariance.",
            "chinese": "Median filtering 会循环移位特征，从而立即实现转调不变性。"
          }
        ],
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
        "options": [
          {
            "label": "A",
            "english": "It forces the resulting matrix to become asymmetric, violating the fundamental properties of distance metrics.",
            "chinese": "它会强迫矩阵变成非对称，违反距离度量的基本性质。"
          },
          {
            "label": "B",
            "english": "It may remove structurally significant repetitions if the song has varying volume or dynamics across sections.",
            "chinese": "如果不同段落音量或动态不同，它可能删除结构上重要的重复。"
          },
          {
            "label": "C",
            "english": "It automatically filters out timbral information, forcing the algorithm to rely only on harmonic progressions.",
            "chinese": "它会自动滤掉音色信息，迫使算法只依赖和声进行。"
          },
          {
            "label": "D",
            "english": "It increases the resolution of the SSM indefinitely, leading to severe over-segmentation.",
            "chinese": "它会无限提高 SSM 分辨率，导致严重过度分段。"
          }
        ],
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
        "options": [
          {
            "label": "A",
            "english": "The lowest rhythmic hierarchy level, representing the fastest possible pulse such as 16th notes.",
            "chinese": "节奏层级中最低的一层，代表最快的脉冲，例如十六分音符。"
          },
          {
            "label": "B",
            "english": "A higher-level grouping of beats defined strictly by accent patterns and time signatures.",
            "chinese": "严格由重音模式和拍号定义的更高层 beat 分组。"
          },
          {
            "label": "C",
            "english": "The predominant pulse level of a piece, typically with a period of 0.5 to 1.0 seconds.",
            "chinese": "一首音乐中主要感知到的脉冲层级，周期通常为 0.5 到 1.0 秒。"
          },
          {
            "label": "D",
            "english": "The unintentional gradual speed-up or slow-down of a musical performance.",
            "chinese": "音乐表演中无意的逐渐加速或减速。"
          }
        ],
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
        "options": [
          {
            "label": "A",
            "english": "The spatial size in time/frequency increases, while the number of channels decreases.",
            "chinese": "时间/频率空间尺寸增加，而通道数减少。"
          },
          {
            "label": "B",
            "english": "Both the spatial size and the number of channels increase exponentially.",
            "chinese": "空间尺寸和通道数都会指数级增加。"
          },
          {
            "label": "C",
            "english": "The spatial size in time/frequency decreases, while the number of channels increases.",
            "chinese": "时间/频率空间尺寸减小，而通道数增加。"
          },
          {
            "label": "D",
            "english": "The spatial size and number of channels remain fixed, but the receptive field shrinks.",
            "chinese": "空间尺寸和通道数保持不变，但感受野缩小。"
          }
        ],
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
        "options": [
          {
            "label": "A",
            "english": "Low specificity, document-level granularity.",
            "chinese": "低 specificity，文档级 granularity。"
          },
          {
            "label": "B",
            "english": "High specificity, fragment-level granularity.",
            "chinese": "高 specificity，片段级 granularity。"
          },
          {
            "label": "C",
            "english": "Medium specificity, fragment-level granularity.",
            "chinese": "中等 specificity，片段级 granularity。"
          },
          {
            "label": "D",
            "english": "High specificity, document-level granularity.",
            "chinese": "高 specificity，文档级 granularity。"
          }
        ],
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
        "options": [
          {
            "label": "A",
            "english": "Evaluating the model's perplexity on a test set.",
            "chinese": "在测试集上评估模型 perplexity。"
          },
          {
            "label": "B",
            "english": "Pruning the generation branches using beam search.",
            "chinese": "使用 beam search 剪枝生成分支。"
          },
          {
            "label": "C",
            "english": "Using the model's prediction at t-1 as the input for time step t.",
            "chinese": "使用模型在 t-1 的预测作为 t 时刻输入。"
          },
          {
            "label": "D",
            "english": "Using the ground truth output at t-1 as the input for the next time step t during training.",
            "chinese": "训练时使用 t-1 的真实输出作为下一步 t 的输入。"
          }
        ],
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
        "options": [
          {
            "label": "A",
            "english": "To intentionally introduce aliasing artifacts that help identify the genre.",
            "chinese": "故意引入 aliasing artifacts 来帮助识别 genre。"
          },
          {
            "label": "B",
            "english": "To speed up processing and save disk space, since very high-frequency content often has less structural information.",
            "chinese": "为了加快处理并节省存储，因为很高频的内容通常结构信息较少。"
          },
          {
            "label": "C",
            "english": "To increase temporal resolution, allowing more precise onset detection.",
            "chinese": "为了提高时间分辨率，从而更精确检测 onset。"
          },
          {
            "label": "D",
            "english": "To automatically filter out low-frequency noise such as DC offset or mains hum.",
            "chinese": "为了自动滤除 DC offset 或电源嗡声等低频噪声。"
          }
        ],
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
        "options": [
          {
            "label": "A",
            "english": "F(p) = 2^((p - 69) / 12) * 440",
            "chinese": "F(p) = 2^((p - 69) / 12) * 440"
          },
          {
            "label": "B",
            "english": "F(p) = 12^((p - 69) / 2) * 440",
            "chinese": "F(p) = 12^((p - 69) / 2) * 440"
          },
          {
            "label": "C",
            "english": "F(p) = 2^((69 - p) / 12) * 440",
            "chinese": "F(p) = 2^((69 - p) / 12) * 440"
          },
          {
            "label": "D",
            "english": "F(p) = 440^((p - 69) / 12) * 2",
            "chinese": "F(p) = 440^((p - 69) / 12) * 2"
          }
        ],
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
        "options": [
          {
            "label": "A",
            "english": "They can be constructed by summing simple sine waves of different frequencies, amplitudes, and phases.",
            "chinese": "它们可以由不同频率、幅度和相位的简单正弦波相加构成。"
          },
          {
            "label": "B",
            "english": "They cannot be decomposed into smaller frequency components without losing phase information.",
            "chinese": "它们不能被分解为更小的频率成分，否则会丢失相位信息。"
          },
          {
            "label": "C",
            "english": "They are composed entirely of in-phase components with a static initial phase.",
            "chinese": "它们完全由同相位且初始相位固定的成分组成。"
          },
          {
            "label": "D",
            "english": "They only contain frequencies above the Nyquist limit.",
            "chinese": "它们只包含 Nyquist limit 以上的频率。"
          }
        ],
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
        "options": [
          {
            "label": "A",
            "english": "It increases the computational speed of the Fast Fourier Transform.",
            "chinese": "它提高 Fast Fourier Transform 的计算速度。"
          },
          {
            "label": "B",
            "english": "It aligns the frequency bins perfectly with Western musical notes.",
            "chinese": "它让频率 bins 与西方音乐音符完美对齐。"
          },
          {
            "label": "C",
            "english": "It smooths the edges of the frame to zero, preventing spectral leakage.",
            "chinese": "它把帧边缘平滑到 0，从而减少 spectral leakage。"
          },
          {
            "label": "D",
            "english": "It natively compresses high frequencies to match human auditory perception.",
            "chinese": "它原生压缩高频以匹配人类听觉感知。"
          }
        ],
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
        "options": [
          {
            "label": "A",
            "english": "CQT frequency bins map directly to musical pitch classes, forming a logarithmic scale.",
            "chinese": "CQT 频率 bins 直接映射到音乐 pitch classes，形成对数尺度。"
          },
          {
            "label": "B",
            "english": "CQT uses a fixed window size across all frequency bands for faster computation.",
            "chinese": "CQT 对所有频段使用固定窗口大小以加快计算。"
          },
          {
            "label": "C",
            "english": "CQT natively applies a Mel filterbank to capture instrument timbre without extra steps.",
            "chinese": "CQT 原生应用 Mel filterbank，无需额外步骤即可捕捉乐器音色。"
          },
          {
            "label": "D",
            "english": "CQT completely eliminates spectral leakage, making it perfect for isolating individual partials.",
            "chinese": "CQT 完全消除 spectral leakage，因此能完美分离单个泛音。"
          }
        ],
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
        "options": [
          {
            "label": "A",
            "english": "To translate audio features directly into sheet music notation.",
            "chinese": "把音频特征直接翻译成五线谱记谱。"
          },
          {
            "label": "B",
            "english": "To compare every time instant of a song with every other time instant to find structurally similar regions.",
            "chinese": "把歌曲中每个时间点与所有其他时间点比较，寻找结构相似区域。"
          },
          {
            "label": "C",
            "english": "To isolate individual instruments by removing non-structural noise.",
            "chinese": "通过去除非结构噪声来分离单个乐器。"
          },
          {
            "label": "D",
            "english": "To extract tempo and beat information exclusively.",
            "chinese": "只用于提取 tempo 和 beat 信息。"
          }
        ],
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
        "options": [
          {
            "label": "A",
            "english": "By filtering the SSM with multiple diagonal kernels corresponding to different structural changes.",
            "chinese": "用多个对应不同结构变化的对角核滤波 SSM。"
          },
          {
            "label": "B",
            "english": "By evaluating the Euclidean distance between raw audio waveforms.",
            "chinese": "通过计算原始音频波形之间的欧氏距离。"
          },
          {
            "label": "C",
            "english": "By computing 12 cyclic shifts of chroma features and taking the maximum similarity across all shifts.",
            "chinese": "对 chroma 特征计算 12 种循环移位，并取所有移位中的最大相似度。"
          },
          {
            "label": "D",
            "english": "By applying an adaptive threshold that normalizes volume variations across sections.",
            "chinese": "通过自适应阈值归一化不同段落间的音量变化。"
          }
        ],
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
        "options": [
          {
            "label": "A",
            "english": "An onset is an abstract, perfectly isochronous grid, whereas a beat represents a sudden physical energy rise.",
            "chinese": "Onset 是抽象且完全等时的网格，而 beat 表示突然的物理能量上升。"
          },
          {
            "label": "B",
            "english": "An onset is a physical event marking the start of a note, whereas a beat is a perceived, regularly recurring point in time.",
            "chinese": "Onset 是音符开始的物理事件，而 beat 是感知到的规律重复时间点。"
          },
          {
            "label": "C",
            "english": "An onset requires continuous periodicity estimation, whereas a beat is identified through naive peak picking.",
            "chinese": "Onset 需要连续周期估计，而 beat 通过简单峰值检测识别。"
          },
          {
            "label": "D",
            "english": "An onset can only be identified during silence, whereas a beat must always align with a transient.",
            "chinese": "Onset 只能在静音期间识别，而 beat 必须总是对齐瞬态。"
          }
        ],
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
        "options": [
          {
            "label": "A",
            "english": "Both frequency and phase are determined exclusively by the short-time autocorrelation tempogram.",
            "chinese": "频率和相位都只由短时自相关 tempogram 决定。"
          },
          {
            "label": "B",
            "english": "Frequency is derived from logarithmic compression, and phase is obtained via half-wave rectification.",
            "chinese": "频率来自对数压缩，相位通过半波整流获得。"
          },
          {
            "label": "C",
            "english": "Frequency is set by the energy-based novelty function, and phase is determined by the Fourier tempogram.",
            "chinese": "频率由基于能量的 novelty function 设定，相位由 Fourier tempogram 决定。"
          },
          {
            "label": "D",
            "english": "Frequency is determined by the dominant period from the tempogram, and phase is derived from the novelty function to align with the onset.",
            "chinese": "频率由 tempogram 中的主导周期决定，相位由 novelty function 得出以对齐 onset。"
          }
        ],
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
        "options": [
          {
            "label": "A",
            "english": "The F1-score will be approximately 0.99 due to perfect precision.",
            "chinese": "由于 precision 完美，F1-score 大约会是 0.99。"
          },
          {
            "label": "B",
            "english": "The model achieves 99% accuracy.",
            "chinese": "模型会达到 99% accuracy。"
          },
          {
            "label": "C",
            "english": "The Area Under the Curve (AUC) will perfectly equal 1.0.",
            "chinese": "AUC 会完美等于 1.0。"
          },
          {
            "label": "D",
            "english": "The recall for the minority class will be artificially inflated to 100%.",
            "chinese": "少数类 recall 会被人为抬高到 100%。"
          }
        ],
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
        "options": [
          {
            "label": "A",
            "english": "The overall genre of the track, such as Jazz or Rock.",
            "chinese": "曲目的整体 genre，例如 Jazz 或 Rock。"
          },
          {
            "label": "B",
            "english": "The raw amplitude envelope representing the physical sound wave.",
            "chinese": "表示物理声波的原始 amplitude envelope。"
          },
          {
            "label": "C",
            "english": "Pitch- and beat-related descriptors, such as note onsets, MFCCs and chroma.",
            "chinese": "音高和节拍相关描述符，例如 note onsets、MFCCs 和 chroma。"
          },
          {
            "label": "D",
            "english": "The predicted continuous valence and arousal coordinates on a 2D emotion plane.",
            "chinese": "二维情绪平面上预测的连续 valence 和 arousal 坐标。"
          }
        ],
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
        "options": [
          {
            "label": "A",
            "english": "F1-Score@n",
            "chinese": "F1-Score@n"
          },
          {
            "label": "B",
            "english": "Mean Reciprocal Rank (MRR)",
            "chinese": "平均倒数排名（MRR）"
          },
          {
            "label": "C",
            "english": "Mean Average Precision (MAP)",
            "chinese": "平均精度均值（MAP）"
          },
          {
            "label": "D",
            "english": "Hits@K",
            "chinese": "Hits@K"
          }
        ],
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
        "options": [
          {
            "label": "A",
            "english": "Generative sequence models cannot process multi-dimensional arrays, forcing arbitrary flattening.",
            "chinese": "生成序列模型不能处理多维数组，因此必须任意展平。"
          },
          {
            "label": "B",
            "english": "Sustained notes are represented by single isolated tokens without offset values, making exact duration impossible.",
            "chinese": "延音由没有 offset 值的单个孤立 token 表示，因此无法计算精确持续时间。"
          },
          {
            "label": "C",
            "english": "The matrix uses one vocabulary dimension for both pitch and duration, irreversibly compressing timing data.",
            "chinese": "矩阵用同一个词汇维度表示 pitch 和 duration，不可逆地压缩 timing 数据。"
          },
          {
            "label": "D",
            "english": "The time axis is strictly quantized into rigid discrete metrical steps, leaving no way to represent micro-timing deviations.",
            "chinese": "时间轴被严格量化为固定离散节拍步长，无法表示微小时值偏移。"
          }
        ],
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
        "options": [
          {
            "label": "A",
            "english": "By relying solely on Turing tests to gauge human appeal.",
            "chinese": "只依赖图灵测试来衡量人类吸引力。"
          },
          {
            "label": "B",
            "english": "By analysing histograms and pitch counts to detect novelty.",
            "chinese": "通过分析直方图和音高计数来检测新颖性。"
          },
          {
            "label": "C",
            "english": "By adopting a multifaceted approach combining quantitative and qualitative feedback.",
            "chinese": "采用结合定量和定性反馈的多维方法。"
          },
          {
            "label": "D",
            "english": "By computing log-likelihood and perplexity to ensure high accuracy of generated music.",
            "chinese": "通过计算 log-likelihood 和 perplexity 来确保生成音乐高准确率。"
          }
        ],
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
        "options": [
          {
            "label": "A",
            "english": "It allows the model to predict raw waveforms directly at 44,100 samples per second without any decoding bottleneck.",
            "chinese": "它允许模型无解码瓶颈地直接以每秒 44,100 采样预测原始波形。"
          },
          {
            "label": "B",
            "english": "It snaps compressed audio to a discrete codebook of tokens, perfectly preserving text-to-audio semantics.",
            "chinese": "它把压缩音频映射到离散 token codebook，完美保留文本到音频语义。"
          },
          {
            "label": "C",
            "english": "It allows smooth mathematical interpolation between different musical sequences, such as morphing one drum beat into another.",
            "chinese": "它允许在不同音乐序列之间做平滑数学插值，例如把一个鼓点逐渐变形成另一个。"
          },
          {
            "label": "D",
            "english": "It eliminates autoregressive continuation entirely by generating the whole song in one forward pass.",
            "chinese": "它通过一次前向传播生成整首歌，从而完全消除自回归续写需求。"
          }
        ],
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
    "module": "Simulation Exam",
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
    "module": "Simulation Exam",
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
    "module": "Simulation Exam",
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
  },
  {
    "frequency": "Lab W1",
    "title": "Lab Week 1: Music Intelligence Foundations",
    "module": "Lab W1",
    "items": [
      {
        "title": "Lab W1 Q1 MIDI",
        "englishQuestion": "What is MIDI, and why is it useful in music information retrieval?",
        "chineseQuestion": "什么是 MIDI？为什么它在音乐信息检索中有用？",
        "englishAnswer": "MIDI is a symbolic protocol for musical events, such as Note On, Note Off, pitch, velocity, and control changes. It is useful because it is lightweight, easy to edit, and gives clear note-level information for tasks such as transcription or generation.",
        "chineseAnswer": "MIDI 是表示音乐事件的符号协议，例如 Note On、Note Off、音高、力度和控制变化。它很有用，因为文件轻、容易编辑，并且能为转录或生成等任务提供清楚的音符级信息。",
        "id": "lab-w1-q1",
        "tag": "MIDI"
      },
      {
        "title": "Lab W1 Q2 MIDI Events",
        "englishQuestion": "Name the main information stored in a MIDI note event.",
        "chineseQuestion": "MIDI 音符事件中通常存储哪些主要信息？",
        "englishAnswer": "A MIDI note event usually stores pitch, note-on time, note-off time or duration, and velocity. Pitch is commonly encoded from 0 to 127, and velocity roughly represents how strongly the note is played.",
        "chineseAnswer": "MIDI 音符事件通常包含音高、开始时间、结束时间或持续时间，以及力度。音高通常用 0 到 127 编码，力度大致表示音符演奏得多强。",
        "id": "lab-w1-q2",
        "tag": "MIDI"
      },
      {
        "title": "Lab W1 Q3 Music Dataset Design",
        "englishQuestion": "What are the four important parts of a well-designed music dataset?",
        "chineseQuestion": "一个设计良好的音乐数据集通常包含哪四个重要部分？",
        "englishAnswer": "A good music dataset should include music metadata, audio or symbolic content, annotations or labels, and clear licensing or copyright information.",
        "chineseAnswer": "好的音乐数据集应包含音乐元数据、音频或符号内容、标注或标签，以及清楚的许可和版权信息。",
        "id": "lab-w1-q3",
        "tag": "Datasets"
      },
      {
        "title": "Lab W1 Q4 Task-Specific Datasets",
        "englishQuestion": "Why are music datasets often task-specific?",
        "chineseQuestion": "为什么音乐数据集通常是面向具体任务设计的？",
        "englishAnswer": "Different MIR tasks need different inputs and labels. For example, transcription needs note-level labels, genre classification needs genre labels, and structure analysis needs segment or boundary annotations.",
        "chineseAnswer": "不同 MIR 任务需要不同输入和标签。例如，转录需要音符级标签，风格分类需要 genre 标签，结构分析需要段落或边界标注。",
        "id": "lab-w1-q4",
        "tag": "Datasets"
      },
      {
        "title": "Lab W1 Q5 Dataset Examples",
        "englishQuestion": "Give examples of music datasets and what they are useful for.",
        "chineseQuestion": "举例说明一些音乐数据集以及它们的用途。",
        "englishAnswer": "The Million Song Dataset is useful for large-scale metadata and audio-feature research. ChoCo is useful for harmony and chord-related symbolic work. Schubert Winterreise is useful for aligned musicological analysis of performances and scores.",
        "chineseAnswer": "Million Song Dataset 适合大规模元数据和音频特征研究。ChoCo 适合和声、和弦等符号音乐任务。Schubert Winterreise 适合把演奏、乐谱和音乐学分析进行对齐研究。",
        "id": "lab-w1-q5",
        "tag": "Datasets"
      }
    ]
  },
  {
    "frequency": "Lab W2",
    "title": "Lab Week 2: Time-Domain Audio Features",
    "module": "Lab W2",
    "items": [
      {
        "title": "Lab W2 Q1 Nyquist Rate",
        "englishQuestion": "If a violin signal contains frequencies up to 20 kHz, what minimum sampling rate is needed to avoid aliasing?",
        "chineseQuestion": "如果小提琴信号最高频率到 20 kHz，为避免混叠，最低采样率需要多少？",
        "englishAnswer": "By the Nyquist-Shannon theorem, the sampling rate must be greater than twice the highest frequency. Twice 20 kHz is 40 kHz, so the minimum is just above 40 kHz; in practice 44.1 kHz is commonly used.",
        "chineseAnswer": "根据 Nyquist-Shannon 定理，采样率必须大于最高频率的两倍。20 kHz 的两倍是 40 kHz，所以最低要略高于 40 kHz；实际中常用 44.1 kHz。",
        "id": "lab-w2-q1",
        "tag": "Sampling",
        "options": [
          {
            "label": "1",
            "english": "10 kHz",
            "chinese": "10 kHz"
          },
          {
            "label": "2",
            "english": "20 kHz",
            "chinese": "20 kHz"
          },
          {
            "label": "3",
            "english": "40 kHZ",
            "chinese": "40 kHz"
          },
          {
            "label": "4",
            "english": "44.1 kHz",
            "chinese": "44.1 kHz"
          }
        ]
      },
      {
        "title": "Lab W2 Q2 Bit Depth",
        "englishQuestion": "What does bit depth control in digital audio?",
        "chineseQuestion": "数字音频中的 bit depth 控制什么？",
        "englishAnswer": "Bit depth controls amplitude resolution and dynamic range. Higher bit depth gives more possible amplitude levels and less quantisation noise.",
        "chineseAnswer": "Bit depth 控制振幅分辨率和动态范围。bit depth 越高，可表示的振幅级别越多，量化噪声越小。",
        "id": "lab-w2-q2",
        "tag": "Digital audio",
        "options": [
          {
            "label": "1",
            "english": "The maximum frequency we can record",
            "chinese": "我们能录制的最高频率"
          },
          {
            "label": "2",
            "english": "The resolution of the amplitude (dynamic range)",
            "chinese": "振幅分辨率（动态范围）"
          },
          {
            "label": "3",
            "english": "The speed of the playback",
            "chinese": "播放速度"
          },
          {
            "label": "4",
            "english": "The number of channels (Mono vs. Stereo)",
            "chinese": "声道数量（单声道 vs 立体声）"
          }
        ]
      },
      {
        "title": "Lab W2 Quiz 3 Robustness to Noise",
        "englishQuestion": "An audio signal has a few random very loud clicks or pops caused by a bad cable. Which feature is less affected by these individual outliers?",
        "chineseQuestion": "音频信号中有一些由坏线造成的随机大声 click/pop。哪个特征受这些单个异常值影响更小？",
        "options": [
          {
            "label": "1",
            "english": "Amplitude Envelope (AE)",
            "chinese": "振幅包络（AE）"
          },
          {
            "label": "2",
            "english": "Root Mean Square Energy (RMS)",
            "chinese": "均方根能量（RMS）"
          }
        ],
        "englishAnswer": "Correct answer: 2. RMS is less affected because it averages energy across the frame, while AE takes the maximum value and can be dominated by one loud click.",
        "chineseAnswer": "正确答案：2。RMS 受影响更小，因为它对一帧中的能量做平均；AE 取最大值，容易被一个很响的 click 主导。",
        "id": "lab-w2-q3-robustness",
        "tag": "Robustness"
      },
      {
        "title": "Lab W2 Q3 ZCR Meaning",
        "englishQuestion": "What does a high or low zero-crossing rate tell us about a sound?",
        "chineseQuestion": "高或低 zero-crossing rate 通常说明声音有什么特点？",
        "englishAnswer": "Low ZCR often means slow oscillation, low frequency, or tonal content such as bass. High ZCR often means fast oscillation, high-frequency content, noise, or percussive sounds.",
        "chineseAnswer": "低 ZCR 通常表示振动慢、频率低或偏音调性，例如 bass。高 ZCR 通常表示振动快、高频成分多、噪声性强或打击类声音。",
        "id": "lab-w2-q3",
        "tag": "ZCR",
        "options": [
          {
            "label": "1",
            "english": "Clip A is a Cymbal crash; Clip B is a Cello string",
            "chinese": "Clip A 是镲片声；Clip B 是大提琴弦声"
          },
          {
            "label": "2",
            "english": "Clip A is a Bass Guitar; Clip B is White Noise/Hi-Hat",
            "chinese": "Clip A 是贝斯吉他；Clip B 是白噪声/Hi-Hat"
          },
          {
            "label": "3",
            "english": "Clip A is Silence; Clip B is a Piano chord",
            "chinese": "Clip A 是静音；Clip B 是钢琴和弦"
          }
        ]
      },
      {
        "title": "Lab W2 Q4 Framing",
        "englishQuestion": "Why do we split audio into short frames before computing features?",
        "chineseQuestion": "为什么计算特征前要把音频切成短帧？",
        "englishAnswer": "Music changes over time, so one global feature is usually not enough. Short frames let us assume the signal is locally stable and track how features evolve through the song.",
        "chineseAnswer": "音乐会随时间变化，一个全局特征通常不够。短帧让我们可以假设局部信号较稳定，并追踪特征在整首歌中的变化。",
        "id": "lab-w2-q4",
        "tag": "Framing",
        "options": [
          {
            "label": "1",
            "english": "Python cannot load long files",
            "chinese": "Python 不能加载长文件"
          },
          {
            "label": "2",
            "english": "Assume the signal is \"Stationary\" only for short periods",
            "chinese": "假设信号只在短时间内近似平稳"
          },
          {
            "label": "3",
            "english": "To systematically increase the volume of the signal",
            "chinese": "为了系统性提高信号音量"
          },
          {
            "label": "4",
            "english": "To study the features at local segments",
            "chinese": "为了研究局部片段中的特征"
          }
        ]
      },
      {
        "title": "Lab W2 Q5 Decibels",
        "englishQuestion": "What does a +6 dB gain roughly mean for signal amplitude?",
        "chineseQuestion": "+6 dB gain 对信号振幅大致意味着什么？",
        "englishAnswer": "The decibel scale is logarithmic. A +6 dB gain roughly doubles the amplitude, which fits the way humans perceive loudness better than a linear scale.",
        "chineseAnswer": "分贝是对数尺度。+6 dB 大致表示振幅翻倍，比线性尺度更符合人对响度的感知方式。",
        "id": "lab-w2-q5",
        "tag": "Decibels",
        "options": [
          {
            "label": "1",
            "english": "They increase by adding 6 (e.g., 0.5 -> 6.5)",
            "chinese": "它们通过加 6 增加（例如 0.5 -> 6.5）"
          },
          {
            "label": "2",
            "english": "They are squared",
            "chinese": "它们会被平方"
          },
          {
            "label": "3",
            "english": "They approximately double",
            "chinese": "它们大约翻倍"
          },
          {
            "label": "4",
            "english": "They are multiplied by 6",
            "chinese": "它们乘以 6"
          }
        ]
      },
      {
        "title": "Lab W2 Q6 AE and ZCR",
        "englishQuestion": "For x = [1, -1, 1, -1, 1], compute amplitude envelope and ZCR.",
        "chineseQuestion": "对 x = [1, -1, 1, -1, 1]，计算 amplitude envelope 和 ZCR。",
        "englishAnswer": "Amplitude envelope is max(|x|) = 1. There are 4 sign changes across 4 gaps, so ZCR = 4 / 4 = 1.0.",
        "chineseAnswer": "Amplitude envelope 为 max(|x|) = 1。4 个相邻间隔中有 4 次符号变化，所以 ZCR = 4 / 4 = 1.0。",
        "id": "lab-w2-q6",
        "tag": "Calculation"
      },
      {
        "title": "Lab W2 Q7 CD Audio Size",
        "englishQuestion": "Estimate the size of one minute of uncompressed CD-quality stereo audio: 44.1 kHz, 16-bit, 2 channels.",
        "chineseQuestion": "估算 1 分钟未压缩 CD 音质立体声音频大小：44.1 kHz、16-bit、2 声道。",
        "englishAnswer": "Total bits = 44100 * 16 * 2 * 60 = 84,672,000 bits. This is 10,584,000 bytes, about 10 MB. If compressed audio is about 1 MB per minute, the compression ratio is roughly 10:1.",
        "chineseAnswer": "总 bit 数 = 44100 * 16 * 2 * 60 = 84,672,000 bits。换成 bytes 是 10,584,000，约 10 MB。如果压缩音频约 1 MB/分钟，压缩比大约是 10:1。",
        "id": "lab-w2-q7",
        "tag": "Calculation"
      }
    ]
  },
  {
    "frequency": "Lab W3",
    "title": "Lab Week 3: Frequency-Domain Audio Features",
    "module": "Lab W3",
    "items": [
      {
        "title": "Lab W3 Q1 Mel Spectrogram",
        "englishQuestion": "How do we convert a linear spectrogram to a Mel spectrogram?",
        "chineseQuestion": "如何把 linear spectrogram 转换为 Mel spectrogram？",
        "englishAnswer": "Convert the magnitude to a suitable scale such as dB, then apply a Mel filterbank. Mel filters are denser at low frequencies and wider at high frequencies, matching human pitch perception better.",
        "chineseAnswer": "先把幅度转换到合适尺度，例如 dB，再应用 Mel filterbank。Mel 滤波器在低频更密、高频更宽，更贴近人类音高感知。",
        "id": "lab-w3-q1",
        "tag": "Mel"
      },
      {
        "title": "Lab W3 Quiz 1 Fourier Basics",
        "englishQuestion": "According to Fourier's Theorem, any complex periodic sound can be decomposed into a sum of simple what?",
        "chineseQuestion": "根据 Fourier 定理，任何复杂周期声音可以分解为哪些简单成分的和？",
        "options": [
          {
            "label": "1",
            "english": "Square waves of different volumes",
            "chinese": "不同音量的方波"
          },
          {
            "label": "2",
            "english": "Sinusoids of different frequencies, amplitudes, and phases",
            "chinese": "不同频率、幅度和相位的正弦波"
          },
          {
            "label": "3",
            "english": "Sinusoids of different frequencies and amplitudes",
            "chinese": "不同频率和幅度的正弦波"
          },
          {
            "label": "4",
            "english": "Logarithmic curves equally spaced in frequency range",
            "chinese": "在频率范围内等间隔的对数曲线"
          }
        ],
        "englishAnswer": "Correct answer: 2. Complex periodic sounds can be represented as sums of sinusoids with different frequencies, amplitudes, and phases.",
        "chineseAnswer": "正确答案：2。复杂周期声音可以表示为不同频率、幅度和相位的正弦波之和。",
        "id": "lab-w3-q1-fourier",
        "tag": "Fourier"
      },
      {
        "title": "Lab W3 Q2 Horizontal Line",
        "englishQuestion": "What does a distinct horizontal line in a spectrogram represent?",
        "chineseQuestion": "spectrogram 中清楚的水平线代表什么？",
        "englishAnswer": "It represents a steady tone that keeps roughly the same frequency over time.",
        "chineseAnswer": "它代表一个稳定音，频率在一段时间内基本保持不变。",
        "id": "lab-w3-q2",
        "tag": "Spectrogram",
        "options": [
          {
            "label": "1",
            "english": "A percussive sound (like a snare hit)",
            "chinese": "打击类声音（例如军鼓击打）"
          },
          {
            "label": "2",
            "english": "A steady tonal sound (like a sustained flute note)",
            "chinese": "稳定的音调性声音（例如长笛延音）"
          },
          {
            "label": "3",
            "english": "Silence",
            "chinese": "静音"
          },
          {
            "label": "4",
            "english": "White noise",
            "chinese": "白噪声"
          }
        ]
      },
      {
        "title": "Lab W3 Q3 Window Length Tradeoff",
        "englishQuestion": "What happens if we decrease the STFT window length?",
        "chineseQuestion": "如果减小 STFT window length，会发生什么？",
        "englishAnswer": "Shorter windows improve time resolution but worsen frequency resolution. This is the time-frequency tradeoff.",
        "chineseAnswer": "较短窗口会提高时间分辨率，但降低频率分辨率。这就是 time-frequency tradeoff。",
        "id": "lab-w3-q3",
        "tag": "STFT",
        "options": [
          {
            "label": "1",
            "english": "It improves (gets more precise)",
            "chinese": "它会提高（更精确）"
          },
          {
            "label": "2",
            "english": "It stays the same",
            "chinese": "它保持不变"
          },
          {
            "label": "3",
            "english": "It gets worse (blurry/blocky)",
            "chinese": "它会变差（模糊/块状）"
          },
          {
            "label": "4",
            "english": "It only improves at mid-range frequencies",
            "chinese": "它只在中频范围提高"
          }
        ]
      },
      {
        "title": "Lab W3 Q4 Spectral Centroid",
        "englishQuestion": "What does spectral centroid measure?",
        "chineseQuestion": "spectral centroid 衡量什么？",
        "englishAnswer": "Spectral centroid is the centre of mass of the spectrum. A high centroid means more high-frequency energy and a brighter sound; a low centroid means more low-frequency energy.",
        "chineseAnswer": "Spectral centroid 是频谱的重心。centroid 高说明高频能量多、声音更明亮；centroid 低说明低频能量更多。",
        "id": "lab-w3-q4",
        "tag": "Centroid",
        "options": [
          {
            "label": "1",
            "english": "Clip A is a Bass Guitar; Clip B is a Hi-Hat cymbal",
            "chinese": "Clip A 是贝斯吉他；Clip B 是 Hi-Hat 镲片"
          },
          {
            "label": "2",
            "english": "Clip A is a Hi-Hat cymbal; Clip B is a Bass Guitar",
            "chinese": "Clip A 是 Hi-Hat 镲片；Clip B 是贝斯吉他"
          },
          {
            "label": "3",
            "english": "Both are likely piano chords",
            "chinese": "两者都可能是钢琴和弦"
          }
        ]
      },
      {
        "title": "Lab W3 Q5 Chroma and Octaves",
        "englishQuestion": "Why do C4 and C5 have similar chroma vectors?",
        "chineseQuestion": "为什么 C4 和 C5 的 chroma vectors 很相似？",
        "englishAnswer": "Chroma folds pitches into 12 pitch classes and ignores octave information. C4 and C5 are both pitch class C, so their chroma representation is similar.",
        "chineseAnswer": "Chroma 把音高折叠到 12 个 pitch classes 中，忽略八度信息。C4 和 C5 都属于 C 这个 pitch class，所以 chroma 表示相似。",
        "id": "lab-w3-q5",
        "tag": "Chroma",
        "options": [
          {
            "label": "1",
            "english": "They will look completely different as frequencies are different (261Hz vs 523Hz)",
            "chinese": "它们会完全不同，因为频率不同（261Hz vs 523Hz）"
          },
          {
            "label": "2",
            "english": "They will look very similar, with high energy in the \"C\" bin",
            "chinese": "它们会很相似，在 C 这个 bin 中能量较高"
          },
          {
            "label": "3",
            "english": "The C5 vector will be double the size of the C4 vector",
            "chinese": "C5 向量会是 C4 向量大小的两倍"
          }
        ]
      },
      {
        "title": "Lab W3 Q6 Spectral Flux",
        "englishQuestion": "Why does spectral flux peak when a new note is struck?",
        "chineseQuestion": "为什么新音符被敲下时 spectral flux 会出现峰值？",
        "englishAnswer": "A new note suddenly adds energy across frequency bins. Spectral flux measures positive changes in spectral energy, so it becomes large at onsets.",
        "chineseAnswer": "新音符会突然在多个频率 bin 中加入能量。Spectral flux 衡量频谱能量的正向变化，所以在 onset 处变大。",
        "id": "lab-w3-q6",
        "tag": "Flux",
        "options": [
          {
            "label": "1",
            "english": "During a steady, held violin note",
            "chinese": "在稳定保持的小提琴长音期间"
          },
          {
            "label": "2",
            "english": "When a piano key is struck (Silence -> Sound)",
            "chinese": "当钢琴键被敲下时（静音 -> 有声）"
          },
          {
            "label": "3",
            "english": "During a fade-out (Sound -> Silence)",
            "chinese": "在淡出期间（有声 -> 静音）"
          }
        ]
      },
      {
        "title": "Lab W3 Q7 Drawing Spectrograms",
        "englishQuestion": "How would a siren, a clap, and a chord look in a spectrogram?",
        "chineseQuestion": "siren、clap 和 chord 在 spectrogram 中大致长什么样？",
        "englishAnswer": "A siren looks like a rising then falling curve. A clap looks like a thin vertical broadband line. A chord looks like several parallel horizontal lines.",
        "chineseAnswer": "Siren 像先升后降的曲线。Clap 像很窄的垂直宽频线。Chord 像几条平行的水平线。",
        "id": "lab-w3-q7",
        "tag": "Spectrogram"
      },
      {
        "title": "Lab W3 Q8 Frequency Resolution",
        "englishQuestion": "For sampling rate 44.1 kHz and N = 1024, what is the frequency bin width, and can we distinguish 100 Hz from 110 Hz?",
        "chineseQuestion": "采样率 44.1 kHz、N = 1024 时频率 bin 宽度是多少？能区分 100 Hz 和 110 Hz 吗？",
        "englishAnswer": "Bin width is SR / N = 44100 / 1024 = about 43.06 Hz. The gap between 100 Hz and 110 Hz is only 10 Hz, so this FFT size cannot distinguish them well; a larger N is needed.",
        "chineseAnswer": "Bin 宽度为 SR / N = 44100 / 1024，约 43.06 Hz。100 Hz 和 110 Hz 只差 10 Hz，所以这个 FFT 大小很难区分它们；需要更大的 N。",
        "id": "lab-w3-q8",
        "tag": "Calculation"
      }
    ]
  },
  {
    "frequency": "Lab W4",
    "title": "Lab Week 4: Music Structure Analysis",
    "module": "Lab W4",
    "items": [
      {
        "title": "Lab W4 Q1 SSM Intuition",
        "englishQuestion": "What is a self-similarity matrix in music structure analysis?",
        "chineseQuestion": "音乐结构分析中的 self-similarity matrix 是什么？",
        "englishAnswer": "An SSM compares every time frame with every other time frame. Similar blocks reveal repeated or related sections. With a symmetric similarity metric, the SSM is symmetric and has a strong main diagonal.",
        "chineseAnswer": "SSM 把每个时间帧和所有其他时间帧比较。相似块可以显示重复或相关段落。若相似度度量对称，SSM 也是对称的，并且主对角线很强。",
        "id": "lab-w4-q1",
        "tag": "SSM"
      },
      {
        "title": "Lab W4 Q2 Feature Choice",
        "englishQuestion": "Which feature is often suitable for comparing timbre or texture between music sections?",
        "chineseQuestion": "比较音乐段落之间的音色或质感时，常用哪类特征？",
        "englishAnswer": "MFCCs are often suitable because they describe the spectral envelope and timbral shape of audio, which helps compare section texture.",
        "chineseAnswer": "MFCCs 常较合适，因为它们描述频谱包络和音色形状，有助于比较段落质感。",
        "id": "lab-w4-q2",
        "tag": "Features",
        "options": [
          {
            "label": "1",
            "english": "Chromagram",
            "chinese": "色度图（Chromagram）"
          },
          {
            "label": "2",
            "english": "Pitch histograms",
            "chinese": "音高直方图"
          },
          {
            "label": "3",
            "english": "Mel-Frequency Cepstral Coefficients (MFCCs)",
            "chinese": "梅尔频率倒谱系数（MFCCs）"
          },
          {
            "label": "4",
            "english": "Tempo-based features",
            "chinese": "基于速度的特征"
          }
        ]
      },
      {
        "title": "Lab W4 Q3 Median Filter",
        "englishQuestion": "Why can median filtering be better than moving average before structure analysis?",
        "chineseQuestion": "为什么结构分析前 median filtering 可能比 moving average 更好？",
        "englishAnswer": "Both smooth local noise, but median filtering preserves sharp boundaries better. Moving average can blur transitions between sections.",
        "chineseAnswer": "两者都能平滑局部噪声，但 median filtering 更能保留尖锐边界。Moving average 可能把段落转换处模糊掉。",
        "id": "lab-w4-q3",
        "tag": "Filtering",
        "options": [
          {
            "label": "1",
            "english": "It simulates tempo changes over long musical phrases",
            "chinese": "它模拟长乐句中的 tempo 变化"
          },
          {
            "label": "2",
            "english": "It converts hierarchical structures into flat structures",
            "chinese": "它把层次结构转换成扁平结构"
          },
          {
            "label": "3",
            "english": "It dynamically adjusts the local thresholding window over regions",
            "chinese": "它动态调整不同区域的局部阈值窗口"
          },
          {
            "label": "4",
            "english": "It better preserves sharp transitions between homogeneous regions",
            "chinese": "它更好保留同质区域之间的尖锐转换"
          }
        ]
      },
      {
        "title": "Lab W4 Q4 Diagonal Smoothing Risk",
        "englishQuestion": "Why can a large diagonal smoothing filter be risky when tempo changes?",
        "chineseQuestion": "当 tempo 变化时，为什么很大的 diagonal smoothing filter 有风险？",
        "englishAnswer": "Tempo changes warp repeated paths so they may not stay perfectly diagonal. A large strict diagonal filter can blur or destroy these warped repetition paths.",
        "chineseAnswer": "Tempo 变化会让重复路径发生弯曲，不再是完美对角线。过大的严格对角滤波可能模糊或破坏这些弯曲的重复路径。",
        "id": "lab-w4-q4",
        "tag": "Smoothing",
        "options": [
          {
            "label": "1",
            "english": "It amplifies isolated \"speckle\" noise, causing false repetitions to appear",
            "chinese": "它放大孤立 speckle 噪声，导致假重复出现"
          },
          {
            "label": "2",
            "english": "It destroys repetition paths with tempo fluctuations",
            "chinese": "它会破坏有 tempo 波动的重复路径"
          },
          {
            "label": "3",
            "english": "It converts homogeneous block structures into diagonal stripes",
            "chinese": "它把同质块结构转换成对角条纹"
          },
          {
            "label": "4",
            "english": "It inappropriately merges sections played in different tonalities",
            "chinese": "它不恰当地合并不同调性演奏的段落"
          }
        ]
      },
      {
        "title": "Lab W4 Q5 Novelty Kernel Size",
        "englishQuestion": "What is the effect of using a larger checkerboard kernel for novelty-based segmentation?",
        "chineseQuestion": "novelty-based segmentation 中使用更大的 checkerboard kernel 有什么效果？",
        "englishAnswer": "A larger kernel uses more temporal context, smooths local variation, and focuses more on coarse or global section changes.",
        "chineseAnswer": "更大的 kernel 使用更多时间上下文，平滑局部变化，更关注粗粒度或全局段落变化。",
        "id": "lab-w4-q5",
        "tag": "Segmentation",
        "options": [
          {
            "label": "1",
            "english": "It detects detailed, local structural changes -> noisy novelty curve",
            "chinese": "它检测细节性的局部结构变化，novelty 曲线更噪"
          },
          {
            "label": "2",
            "english": "It detects coarser structures -> smoother novelty curve",
            "chinese": "它检测更粗粒度结构，novelty 曲线更平滑"
          },
          {
            "label": "3",
            "english": "It offsets the novelty curve to detect both fine and coarse structures",
            "chinese": "它偏移 novelty 曲线来同时检测细粒度和粗粒度结构"
          },
          {
            "label": "4",
            "english": "It removes off-diagonal noise and fills gaps in broken repetition paths",
            "chinese": "它移除非对角噪声，并填补断裂重复路径中的空隙"
          }
        ]
      },
      {
        "title": "Lab W4 Q6 Multiple Filtering",
        "englishQuestion": "How does multiple filtering help detect repetitions under tempo differences?",
        "chineseQuestion": "multiple filtering 如何帮助检测 tempo 不同情况下的重复？",
        "englishAnswer": "It filters the SSM along several angular directions and takes the best response. This captures paths that are not exactly diagonal because of tempo changes.",
        "chineseAnswer": "它沿多个角度方向对 SSM 滤波，并取最佳响应。这样可以捕捉因 tempo 变化而不完全对角的路径。",
        "id": "lab-w4-q6",
        "tag": "Filtering",
        "options": [
          {
            "label": "1",
            "english": "By filtering the SSM along various directions corresponding to different tempo differences and taking the cell-wise maximum",
            "chinese": "沿对应不同 tempo 差异的多个方向滤波 SSM，并逐格取最大值"
          },
          {
            "label": "2",
            "english": "By applying an adaptive local threshold to binarize the matrix",
            "chinese": "应用自适应局部阈值来二值化矩阵"
          },
          {
            "label": "3",
            "english": "By cyclically shifting the feature vectors across all 12 pitch classes",
            "chinese": "在全部 12 个 pitch classes 上循环移位特征向量"
          },
          {
            "label": "4",
            "english": "By applying a time-sensitive local threshold (tau, mu) to the SSM",
            "chinese": "对 SSM 应用时间敏感的局部阈值（tau, mu）"
          }
        ]
      },
      {
        "title": "Lab W4 Q7 Pairwise Evaluation",
        "englishQuestion": "Why use pairwise classification for evaluating structure grouping?",
        "chineseQuestion": "为什么结构分组评估中使用 pairwise classification？",
        "englishAnswer": "Section labels are arbitrary, so label names cannot be compared directly. Pairwise evaluation checks whether each pair of frames is correctly predicted as same-section or different-section.",
        "chineseAnswer": "段落标签名字是任意的，不能直接比较标签名称。Pairwise evaluation 检查每一对帧是否被正确判断为同段或不同段。",
        "id": "lab-w4-q7",
        "tag": "Evaluation",
        "options": [
          {
            "label": "1",
            "english": "Ground truth annotations do not use segment boundaries",
            "chinese": "真实标注不使用段落边界"
          },
          {
            "label": "2",
            "english": "Because pairwise classification ignores the tolerance window",
            "chinese": "因为 pairwise classification 忽略容忍窗口"
          },
          {
            "label": "3",
            "english": "The algorithm and the ground truth might assign different labels",
            "chinese": "算法和真实标注可能使用不同标签名"
          },
          {
            "label": "4",
            "english": "Because labels cannot be derived from plain structural boundaries",
            "chinese": "因为标签不能从普通结构边界中推导出来"
          }
        ]
      },
      {
        "title": "Lab W4 Q8 Boundary Metrics",
        "englishQuestion": "If 10 boundaries are predicted, 8 are in ground truth, and 6 match within tolerance, compute precision, recall, and F-score.",
        "chineseQuestion": "预测 10 个边界，真实 8 个，容忍窗口内匹配 6 个，计算 precision、recall 和 F-score。",
        "englishAnswer": "Precision = 6 / 10 = 0.6. Recall = 6 / 8 = 0.75. F-score = 2PR / (P + R) = about 0.667.",
        "chineseAnswer": "Precision = 6 / 10 = 0.6。Recall = 6 / 8 = 0.75。F-score = 2PR / (P + R)，约 0.667。",
        "id": "lab-w4-q8",
        "tag": "Calculation"
      },
      {
        "title": "Lab W4 Q9 Transposition-Invariant SSM",
        "englishQuestion": "How can chroma features make an SSM invariant to key transposition?",
        "chineseQuestion": "chroma 特征如何让 SSM 对转调不敏感？",
        "englishAnswer": "A key shift corresponds to a cyclic shift of the 12-dimensional chroma vector. Compute similarity under all 12 shifts and take the maximum similarity. For a +5 semitone modulation, shift by 5 pitch classes.",
        "chineseAnswer": "转调对应 12 维 chroma 向量的循环移位。对 12 种移位都计算相似度，并取最大值。若转调 +5 个半音，就移位 5 个 pitch classes。",
        "id": "lab-w4-q9",
        "tag": "Chroma"
      }
    ]
  },
  {
    "frequency": "Lab W7",
    "title": "Lab Week 7: Content-Based Audio Retrieval",
    "module": "Lab W7",
    "items": [
      {
        "title": "Lab W7 Q1 Hash Time Difference",
        "englishQuestion": "Why do audio fingerprint hashes use time difference rather than absolute time?",
        "chineseQuestion": "为什么 audio fingerprint hash 使用时间差而不是绝对时间？",
        "englishAnswer": "Time difference is translation-invariant. A query clip may start anywhere, but the time gap between two peaks stays the same.",
        "chineseAnswer": "时间差具有平移不变性。查询片段可以从歌曲任意位置开始，但两个峰之间的时间间隔保持不变。",
        "id": "lab-w7-q1",
        "tag": "Fingerprinting"
      },
      {
        "title": "Lab W7 Q2 Embedding Search",
        "englishQuestion": "How is dense embedding search usually scaled to large music collections?",
        "chineseQuestion": "大规模音乐库中的 dense embedding search 通常如何扩展？",
        "englishAnswer": "A query is embedded and compared with database embeddings, often using cosine similarity. At large scale, systems use approximate nearest-neighbour vector databases such as FAISS, Pinecone, Milvus, or Vespa.",
        "chineseAnswer": "先把 query 转成 embedding，再与数据库 embedding 比较，常用 cosine similarity。大规模时通常用近似最近邻向量数据库，例如 FAISS、Pinecone、Milvus 或 Vespa。",
        "id": "lab-w7-q2",
        "tag": "Embeddings"
      },
      {
        "title": "Lab W7 Q3 Variable Duration CNN",
        "englishQuestion": "How can a CNN handle variable-duration audio clips for retrieval?",
        "chineseQuestion": "CNN 如何处理不同长度的音频片段用于检索？",
        "englishAnswer": "Global average pooling over time can collapse variable-length frame outputs into one fixed-size track embedding.",
        "chineseAnswer": "可以在时间维度上做 global average pooling，把不同长度的帧输出压缩成一个固定大小的 track embedding。",
        "id": "lab-w7-q3",
        "tag": "CNN",
        "options": [
          {
            "label": "1",
            "english": "By padding songs with 0-amplitude noise to match the longest duration",
            "chinese": "用 0 振幅噪声 padding 到最长时长"
          },
          {
            "label": "2",
            "english": "By applying time-stretching to conform all tracks to a uniform tempo",
            "chinese": "用 time-stretching 把所有曲目变成统一 tempo"
          },
          {
            "label": "3",
            "english": "By taking a fixed 3s short-chunk and discarding the remainder of the audio",
            "chinese": "只取固定 3 秒短片段并丢弃剩余音频"
          },
          {
            "label": "4",
            "english": "By applying Global Average Pooling over the time axis at the last convolution",
            "chinese": "在最后一层卷积后沿时间轴做 Global Average Pooling"
          }
        ]
      },
      {
        "title": "Lab W7 Q4 Horizontal CNN Filter",
        "englishQuestion": "What does a horizontal 1 x W CNN filter capture on a spectrogram?",
        "chineseQuestion": "spectrogram 上水平的 1 x W CNN filter 捕捉什么？",
        "englishAnswer": "It captures temporal evolution in a narrow frequency band, such as rhythm, sustain, or repeated activity, and is relatively local in frequency.",
        "chineseAnswer": "它捕捉窄频带内随时间的变化，例如节奏、延音或重复活动，并且在频率上比较局部。",
        "id": "lab-w7-q4",
        "tag": "CNN",
        "options": [
          {
            "label": "1",
            "english": "Temporal evolution (e.g. rhythm and sustain) while remaining pitch-invariant",
            "chinese": "时间演化（例如节奏和延音），同时保持相对 pitch-invariant"
          },
          {
            "label": "2",
            "english": "Timbral characteristics, such as spectral envelopes and chord voicings",
            "chinese": "音色特征，例如频谱包络和和弦 voicing"
          },
          {
            "label": "3",
            "english": "Local texture variations, such as rapid vibrato and short percussive decay",
            "chinese": "局部纹理变化，例如快速 vibrato 和短促打击衰减"
          },
          {
            "label": "4",
            "english": "Raw waveform phase information prior to frequency-domain transformation",
            "chinese": "频域变换前的原始波形相位信息"
          }
        ]
      },
      {
        "title": "Lab W7 Q5 Imbalanced Accuracy",
        "englishQuestion": "Why is accuracy misleading for an imbalanced genre classifier?",
        "chineseQuestion": "为什么不平衡 genre classifier 上 accuracy 可能误导？",
        "englishAnswer": "A lazy model can always predict the majority class and still get very high accuracy, such as 99%, while completely failing on the minority class.",
        "chineseAnswer": "懒模型可以一直预测多数类，仍得到很高 accuracy，例如 99%，但完全无法识别少数类。",
        "id": "lab-w7-q5",
        "tag": "Evaluation",
        "options": [
          {
            "label": "1",
            "english": "The F1-score will be approximately 0.99 due to perfect precision",
            "chinese": "由于 precision 完美，F1-score 大约会是 0.99"
          },
          {
            "label": "2",
            "english": "The model achieves 99% accuracy, but this is a misleading metric",
            "chinese": "模型达到 99% accuracy，但这是误导性的指标"
          },
          {
            "label": "3",
            "english": "The Area Under the Curve (AUC) will perfectly equal 1.0",
            "chinese": "AUC 会完美等于 1.0"
          },
          {
            "label": "4",
            "english": "The recall for the minority class (Jazz) will be artificially inflated to 100%",
            "chinese": "少数类 Jazz 的 recall 会被人为抬高到 100%"
          }
        ]
      },
      {
        "title": "Lab W7 Q6 Single-Peak Hash Problem",
        "englishQuestion": "Why is a single-peak hash weak for audio fingerprinting?",
        "chineseQuestion": "为什么 single-peak hash 对 audio fingerprinting 很弱？",
        "englishAnswer": "It has low entropy and too few possible hash values, so many unrelated peaks collide. This creates long inverted lists and many false positives.",
        "chineseAnswer": "它信息量低、可能的 hash 值太少，很多无关峰会碰撞，导致 inverted list 很长、false positives 很多。",
        "id": "lab-w7-q6",
        "tag": "Hashing",
        "options": [
          {
            "label": "1",
            "english": "It lacks translation invariance",
            "chinese": "它缺少平移不变性"
          },
          {
            "label": "2",
            "english": "It takes too long to compute the STFT of a single peak",
            "chinese": "计算单个峰的 STFT 太耗时"
          },
          {
            "label": "3",
            "english": "It has low entropy, leading to long inverted lists and too many false positives",
            "chinese": "它熵低，会导致很长的 inverted lists 和大量 false positives"
          },
          {
            "label": "4",
            "english": "It requires excessive bits to encode, taking up too much memory on the server",
            "chinese": "它需要太多 bits 编码，占用服务器过多内存"
          }
        ]
      },
      {
        "title": "Lab W7 Q7 MAP",
        "englishQuestion": "What does Mean Average Precision reward in retrieval?",
        "chineseQuestion": "Mean Average Precision 在检索中奖励什么？",
        "englishAnswer": "MAP rewards systems that rank relevant documents near the top and also considers the full ranked list.",
        "chineseAnswer": "MAP 奖励把相关结果排在前面的系统，同时也考虑整个排序列表。",
        "id": "lab-w7-q7",
        "tag": "Metrics",
        "options": [
          {
            "label": "1",
            "english": "F1-Score@n",
            "chinese": "F1-Score@n"
          },
          {
            "label": "2",
            "english": "Mean Reciprocal Rank (MRR)",
            "chinese": "平均倒数排名（MRR）"
          },
          {
            "label": "3",
            "english": "Mean Average Precision (MAP)",
            "chinese": "平均精度均值（MAP）"
          },
          {
            "label": "4",
            "english": "Hits@K",
            "chinese": "Hits@K"
          }
        ]
      },
      {
        "title": "Lab W7 Q8 Weak Supervision",
        "englishQuestion": "What is weak supervision in metric learning for music retrieval?",
        "chineseQuestion": "音乐检索 metric learning 中 weak supervision 是什么？",
        "englishAnswer": "It uses indirect metadata, such as artist IDs or track relationships, to create positive and negative pairs without full manual annotations.",
        "chineseAnswer": "它用间接元数据，例如 artist ID 或曲目关系，生成正负样本对，而不需要完整人工标注。",
        "id": "lab-w7-q8",
        "tag": "Metric learning",
        "options": [
          {
            "label": "1",
            "english": "Free-form natural language queries",
            "chinese": "自由形式自然语言查询"
          },
          {
            "label": "2",
            "english": "Self-supervised audio augmentations",
            "chinese": "自监督音频增强"
          },
          {
            "label": "3",
            "english": "Manually annotated audio features",
            "chinese": "人工标注的音频特征"
          },
          {
            "label": "4",
            "english": "Track metadata",
            "chinese": "曲目元数据"
          }
        ]
      },
      {
        "title": "Lab W7 Q9 Triplet Loss",
        "englishQuestion": "What is the idea of triplet loss?",
        "chineseQuestion": "triplet loss 的核心思想是什么？",
        "englishAnswer": "Triplet loss pushes the anchor closer to a positive example than to a negative example by at least a margin alpha.",
        "chineseAnswer": "Triplet loss 让 anchor 到 positive 的距离比到 negative 的距离至少小一个 margin alpha。",
        "id": "lab-w7-q9",
        "tag": "Metric learning",
        "options": [
          {
            "label": "1",
            "english": "Push Anchor closer to Positive than to the Negative by at least a margin alpha",
            "chinese": "让 Anchor 比 Negative 至少近一个 margin alpha 地靠近 Positive"
          },
          {
            "label": "2",
            "english": "Classify Anchor as either a positive or negative match using a binary classifier",
            "chinese": "用二分类器把 Anchor 分类为 positive 或 negative match"
          },
          {
            "label": "3",
            "english": "Map Anchor and Positive to the same continuous embedding vector",
            "chinese": "把 Anchor 和 Positive 映射到同一个连续 embedding 向量"
          },
          {
            "label": "4",
            "english": "Maximise the cosine similarity between the Anchor and Negative tracks",
            "chinese": "最大化 Anchor 和 Negative 曲目之间的 cosine similarity"
          }
        ]
      },
      {
        "title": "Lab W7 Q10 Hash Space Size",
        "englishQuestion": "If k0 and k1 use 8 bits each and delta t uses 9 bits, how many possible pair hashes are there?",
        "chineseQuestion": "如果 k0 和 k1 各用 8 bits，delta t 用 9 bits，总共有多少可能的峰对 hash？",
        "englishAnswer": "A single 8-bit peak has 2^8 = 256 possibilities. A pair hash has 2^(8+8+9) = 2^25 = 33,554,432 possibilities.",
        "chineseAnswer": "单个 8-bit peak 有 2^8 = 256 种可能。峰对 hash 有 2^(8+8+9) = 2^25 = 33,554,432 种可能。",
        "id": "lab-w7-q10",
        "tag": "Calculation"
      }
    ]
  },
  {
    "frequency": "Lab W8-9",
    "title": "Lab Week 8-9: Symbolic Music Generation",
    "module": "Lab W8-9",
    "items": [
      {
        "title": "Lab W8-9 Q1 Evaluation Types",
        "englishQuestion": "Name common ways to evaluate AI-generated music.",
        "chineseQuestion": "评价 AI 生成音乐的常见方式有哪些？",
        "englishAnswer": "Common methods include music modelling metrics, statistical comparison with training data, expert analysis, and listening tests.",
        "chineseAnswer": "常见方法包括音乐建模指标、与训练数据的统计比较、专家分析和听众测试。",
        "id": "lab-w89-q1",
        "tag": "Evaluation"
      },
      {
        "title": "Lab W8-9 Q2 Autoregressive Continuation",
        "englishQuestion": "What does an autoregressive music model predict?",
        "chineseQuestion": "自回归音乐模型预测什么？",
        "englishAnswer": "It predicts the next token given previous tokens, for example predicting x(t+1) from x(1), ..., x(t).",
        "chineseAnswer": "它根据之前的 token 预测下一个 token，例如根据 x(1) 到 x(t) 预测 x(t+1)。",
        "id": "lab-w89-q2",
        "tag": "Autoregressive",
        "options": [
          {
            "label": "1",
            "english": "To classify the start time of each token in the input sequence X",
            "chinese": "分类输入序列 X 中每个 token 的开始时间"
          },
          {
            "label": "2",
            "english": "To output a complete melody simultaneously across all time steps",
            "chinese": "同时在所有时间步输出完整旋律"
          },
          {
            "label": "3",
            "english": "To predict the single next token x(t+1) given the previous ones",
            "chinese": "根据之前 token 预测单个下一个 token x(t+1)"
          },
          {
            "label": "4",
            "english": "To map a discrete symbolic sequence into its transform XR",
            "chinese": "把离散符号序列映射到它的变换 XR"
          }
        ]
      },
      {
        "title": "Lab W8-9 Q3 Piano-Roll Sustains",
        "englishQuestion": "Why can piano-roll representation make sustained notes difficult for models?",
        "chineseQuestion": "为什么 piano-roll 表示会让模型难以处理延音？",
        "englishAnswer": "A sustained note is repeated across many time steps, making sequences long and long-term dependencies harder. It can also confuse sustain with repeated re-strikes.",
        "chineseAnswer": "延音会在许多时间步中重复出现，使序列变长、长期依赖更难学习，也可能混淆延音和重新击键。",
        "id": "lab-w89-q3",
        "tag": "Representation",
        "options": [
          {
            "label": "1",
            "english": "As a single token with a dedicated \"duration\" value attached, which creates unnecessarily large vocabularies",
            "chinese": "作为一个带专门 duration 值的单个 token，导致词表过大"
          },
          {
            "label": "2",
            "english": "As a sequence of repeated individual notes across multiple consecutive discrete time steps, resulting in very long sequences",
            "chinese": "作为跨多个连续离散时间步重复出现的单独音符，导致序列很长"
          },
          {
            "label": "3",
            "english": "Using a specialised \"time-shift\" token to hold the note open, which confuses standard recurrent connections in sequence models",
            "chinese": "使用专门的 time-shift token 保持音符打开，混淆标准循环连接"
          },
          {
            "label": "4",
            "english": "By increasing the velocity value of the initial note-on event, making it impossible to separate volume from duration",
            "chinese": "通过提高初始 note-on 的 velocity，导致音量和持续时间无法区分"
          }
        ]
      },
      {
        "title": "Lab W8-9 Q4 N-Gram Limitation",
        "englishQuestion": "What is the main limitation of an n-gram music model?",
        "chineseQuestion": "n-gram 音乐模型的主要局限是什么？",
        "englishAnswer": "It only conditions on the last n-1 tokens, so it cannot capture long-term structure or wide musical context well.",
        "chineseAnswer": "它只依赖最近的 n-1 个 token，因此难以捕捉长期结构或更宽的音乐上下文。",
        "id": "lab-w89-q4",
        "tag": "N-gram",
        "options": [
          {
            "label": "1",
            "english": "n-gram models can only process audio waveforms and spectrograms, making them unsuitable for symbolic music tokenization",
            "chinese": "n-gram 模型只能处理音频波形和 spectrogram，因此不适合符号音乐 tokenization"
          },
          {
            "label": "2",
            "english": "n-gram models only condition their predictions on a small, fixed window of the most recent tokens, failing to capture wider context",
            "chinese": "n-gram 模型只依赖最近 token 的小固定窗口，无法捕捉更宽上下文"
          },
          {
            "label": "3",
            "english": "n-gram models inherently suffer from the vanishing gradient problem, causing them to rapidly forget the training data during backpropagation",
            "chinese": "n-gram 模型天然有梯度消失问题，导致反向传播时快速忘记训练数据"
          },
          {
            "label": "4",
            "english": "n-gram models require explicitly annotated \"Repeat\" labels to function properly, which are rarely found in standard MIDI datasets",
            "chinese": "n-gram 模型需要显式 Repeat 标签才能工作，而标准 MIDI 数据集中很少有"
          }
        ]
      },
      {
        "title": "Lab W8-9 Q5 LSTM vs Transformer",
        "englishQuestion": "Why might an LSTM be suitable for endless live generation compared with a standard Transformer?",
        "chineseQuestion": "相比标准 Transformer，为什么 LSTM 可能更适合无限实时生成？",
        "englishAnswer": "An LSTM updates hidden and cell states step by step, so it can theoretically continue indefinitely. A standard Transformer has a fixed context window and attention memory grows with sequence length.",
        "chineseAnswer": "LSTM 逐步更新 hidden state 和 cell state，理论上可以一直生成。标准 Transformer 有固定上下文窗口，并且 attention 内存随序列长度增长。",
        "id": "lab-w89-q5",
        "tag": "Models",
        "options": [
          {
            "label": "1",
            "english": "LSTM, because its recurrent architecture sequentially updates an internal cell state, meaning it can theoretically generate new tokens indefinitely",
            "chinese": "LSTM，因为其循环结构按顺序更新内部 cell state，理论上可以无限生成新 token"
          },
          {
            "label": "2",
            "english": "LSTM, because its forget gate completely eliminates the vanishing gradient problem, guaranteeing that the initial musical motifs are permanently remembered days later",
            "chinese": "LSTM，因为 forget gate 完全消除梯度消失，并保证最初动机数天后仍被永久记住"
          },
          {
            "label": "3",
            "english": "Music Transformer, because its self-attention mechanism scales linearly with sequence length, allowing it to easily hold an infinitely growing history of past notes",
            "chinese": "Music Transformer，因为 self-attention 随序列长度线性增长，可轻松保存无限增长的历史音符"
          },
          {
            "label": "4",
            "english": "Music Transformer, because its lack of recurrent connections allows it to seamlessly pass a continuous, rolling hidden state vector from one time step to the next",
            "chinese": "Music Transformer，因为没有循环连接，使它能无缝传递连续滚动 hidden state"
          }
        ]
      },
      {
        "title": "Lab W8-9 Q6 Encoder Bottleneck",
        "englishQuestion": "What is the encoder bottleneck problem in sequence-to-sequence models?",
        "chineseQuestion": "sequence-to-sequence 模型中的 encoder bottleneck 是什么？",
        "englishAnswer": "The whole input is compressed into one fixed-size final hidden vector. Long inputs can lose early or detailed information.",
        "chineseAnswer": "整个输入被压缩成一个固定大小的最终 hidden vector。输入较长时，早期或细节信息容易丢失。",
        "id": "lab-w89-q6",
        "tag": "Seq2seq",
        "options": [
          {
            "label": "1",
            "english": "The model uses a unidirectional context window which fundamentally fails to capture bidirectional motifs",
            "chinese": "模型使用单向上下文窗口，因此根本无法捕捉双向动机"
          },
          {
            "label": "2",
            "english": "The entire input sequence must be compressed into a single, fixed-size vector representing the final hidden state",
            "chinese": "整个输入序列必须压缩成一个表示最终 hidden state 的固定大小向量"
          },
          {
            "label": "3",
            "english": "The Softmax function is pushed into regions where gradients vanish due to long sequence lengths",
            "chinese": "长序列使 Softmax 被推入梯度消失区域"
          },
          {
            "label": "4",
            "english": "Truncated Backpropagation Through Time (BPTT) requires exponentially increasing memory as sequence lengths grow",
            "chinese": "截断 BPTT 随序列长度增长需要指数级增加内存"
          }
        ]
      },
      {
        "title": "Lab W8-9 Q7 Positional Encoding",
        "englishQuestion": "Why do Transformers need positional encoding?",
        "chineseQuestion": "为什么 Transformer 需要 positional encoding？",
        "englishAnswer": "Self-attention alone is permutation-invariant and does not know token order. Positional encodings add order information, while RNNs get order from sequential processing.",
        "chineseAnswer": "纯 self-attention 对顺序不敏感，不知道 token 的位置。Positional encoding 加入顺序信息，而 RNN 通过按顺序处理天然获得顺序。",
        "id": "lab-w89-q7",
        "tag": "Transformer",
        "options": [
          {
            "label": "1",
            "english": "RNNs evaluate the entire sequence simultaneously, whereas Self-Attention Networks process sequence batches sequentially frame-by-frame",
            "chinese": "RNN 同时评估整个序列，而 Self-Attention 网络逐帧顺序处理批序列"
          },
          {
            "label": "2",
            "english": "Self-Attention Networks compute hidden states strictly sequentially, preventing access to the sequence's order",
            "chinese": "Self-Attention 网络严格顺序计算 hidden states，导致无法访问序列顺序"
          },
          {
            "label": "3",
            "english": "RNNs are bottlenecked by context limits, whereas Self-Attention Networks need explicit boundary markers to prevent unbounded sequence generation",
            "chinese": "RNN 受上下文限制瓶颈影响，而 Self-Attention 网络需要显式边界标记防止无界生成"
          },
          {
            "label": "4",
            "english": "Self-Attention operations are permutation-invariant and do not inherently know the order of the sequence, whereas RNNs process tokens sequentially",
            "chinese": "Self-Attention 操作对排列不敏感，天然不知道序列顺序，而 RNN 按顺序处理 token"
          }
        ]
      },
      {
        "title": "Lab W8-9 Q8 Masked Self-Attention",
        "englishQuestion": "How does masked self-attention stop a Transformer from seeing future tokens?",
        "chineseQuestion": "masked self-attention 如何阻止 Transformer 看到未来 token？",
        "englishAnswer": "It sets the upper-triangular future positions in the attention score matrix to negative infinity before softmax, so future attention weights become zero.",
        "chineseAnswer": "它在 softmax 前把 attention score 矩阵中代表未来位置的上三角部分设为负无穷，使未来 token 的注意力权重变为 0。",
        "id": "lab-w89-q8",
        "tag": "Transformer",
        "options": [
          {
            "label": "1",
            "english": "It truncates the context window to only include the previous N hidden states",
            "chinese": "它截断上下文窗口，只包含前 N 个 hidden states"
          },
          {
            "label": "2",
            "english": "It sets all upper-triangular elements of QK^T matrix to -inf before the softmax",
            "chinese": "它在 softmax 前把 QK^T 矩阵上三角元素设为 -inf"
          },
          {
            "label": "3",
            "english": "It employs a \"skewing trick\" that shifts the relative attention rows backward",
            "chinese": "它使用 skewing trick 将相对注意力行向后移动"
          },
          {
            "label": "4",
            "english": "It injects a zero-vector bias into the Values matrix for all sequence indices j > i",
            "chinese": "它对所有 j > i 的序列位置向 Values 矩阵注入零向量偏置"
          }
        ]
      },
      {
        "title": "Lab W8-9 Q9 Statistical Evaluation",
        "englishQuestion": "What is the strength and weakness of statistical comparison for generated music?",
        "chineseQuestion": "用统计比较评价生成音乐的优点和缺点是什么？",
        "englishAnswer": "It gives objective evidence that generated music matches training-data statistics. However, it does not fully measure aesthetics, compositional quality, or listener preference.",
        "chineseAnswer": "它能客观说明生成音乐是否接近训练数据统计特征。但它不能充分衡量审美、作曲质量或听众偏好。",
        "id": "lab-w89-q9",
        "tag": "Evaluation",
        "options": [
          {
            "label": "1",
            "english": "Listening Tests",
            "chinese": "听众测试"
          },
          {
            "label": "2",
            "english": "Expert Analysis",
            "chinese": "专家分析"
          },
          {
            "label": "3",
            "english": "Statistical Comparison",
            "chinese": "统计比较"
          },
          {
            "label": "4",
            "english": "Music Modelling",
            "chinese": "音乐建模"
          }
        ]
      },
      {
        "title": "Lab W8-9 Q10 LSTM Cell Calculation",
        "englishQuestion": "For an LSTM, how is the new cell state C(t) computed, and what is the result for C(t-1) = [0.7, -0.3, 0.5], f = [1, 0, 0.5], candidate = [0.2, 0.8, -0.1], i = [0, 1, 0.5]?",
        "chineseQuestion": "LSTM 中新的 cell state C(t) 如何计算？若 C(t-1)=[0.7,-0.3,0.5]，f=[1,0,0.5]，candidate=[0.2,0.8,-0.1]，i=[0,1,0.5]，结果是多少？",
        "englishAnswer": "Use C(t) = C(t-1) * f + candidate * i, element by element. Old memory part is [0.7, 0, 0.25], new write part is [0, 0.8, -0.05], so C(t) = [0.7, 0.8, 0.2].",
        "chineseAnswer": "逐元素计算 C(t) = C(t-1) * f + candidate * i。旧记忆部分为 [0.7, 0, 0.25]，新写入部分为 [0, 0.8, -0.05]，所以 C(t) = [0.7, 0.8, 0.2]。",
        "id": "lab-w89-q10",
        "tag": "Calculation"
      },
      {
        "title": "Lab W8-9 Q11 Perplexity Limits",
        "englishQuestion": "Why is log-likelihood or perplexity not enough to evaluate generated music?",
        "chineseQuestion": "为什么 log-likelihood 或 perplexity 不足以评价生成音乐？",
        "englishAnswer": "They measure next-token prediction, not whether the music is beautiful, novel, structured, or free from plagiarism.",
        "chineseAnswer": "它们衡量的是 next-token prediction，而不是音乐是否好听、新颖、有结构，或是否避免抄袭。",
        "id": "lab-w89-q11",
        "tag": "Evaluation"
      },
      {
        "title": "Lab W8-9 Q12 Evaluation Pipeline",
        "englishQuestion": "Give a good evaluation pipeline for an AI music generator.",
        "chineseQuestion": "给出一个评价 AI 音乐生成器的合理流程。",
        "englishAnswer": "Use model metrics such as perplexity, compare generated statistics with training data, check novelty or plagiarism with nearest-neighbour similarity, ask experts to analyse structure and harmony, and run listening tests for musicality and expressiveness.",
        "chineseAnswer": "先用 perplexity 等模型指标，再比较生成结果和训练数据的统计特征，用 nearest-neighbour similarity 检查新颖性或抄袭，请专家分析结构与和声，最后用听众测试评价音乐性和表现力。",
        "id": "lab-w89-q12",
        "tag": "Evaluation"
      }
    ]
  }
];
