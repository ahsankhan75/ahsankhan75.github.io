/* global PORTFOLIO_CATEGORIES, PORTFOLIO_PROJECTS */

var PORTFOLIO_CATEGORIES = [
  { id: 'software-dev', name: 'Software Development', icon: '⚙️' },
  { id: 'data-science', name: 'Data Science', icon: '📊' },
  { id: 'data-mining', name: 'Data Mining', icon: '⛏️' },
  { id: 'nlp', name: 'Natural Language Processing', icon: '💬' },
  { id: 'machine-learning', name: 'Machine Learning Models', icon: '🧠' },
  { id: 'computer-vision', name: 'Computer Vision', icon: '👁️' },
  { id: 'deep-learning', name: 'Deep Learning Models', icon: '🔬' },
  { id: 'llms-agents', name: 'LLMs & AI Agents', icon: '🤖' }
];

var PORTFOLIO_PROJECTS = [
  {
    id: 'iqueue',
    category: 'software-dev',
    title: 'IQueue: Smart Scheduling Platform',
    url: 'https://iqueue-zeta.vercel.app',
    linkLabel: 'Live Demo',
    tags: ['React', 'Express', 'MongoDB', 'JavaScript', 'Vercel', 'Render'],
    summary: 'IQueue is a full-stack appointment and queue management platform that helps customers book services online while giving businesses a unified dashboard to manage walk-in and scheduled traffic. Built as a production-deployed MERN application, it addresses the real-world problem of fragmented scheduling across vendors, staff, and customers.',
    impact: 'IQueue demonstrates how a single scheduling platform can replace phone calls, walk-in chaos, and scattered spreadsheets for small service businesses. By separating vendor, staff, and customer experiences while keeping appointment state synchronized in the cloud, the app shows a practical path from academic MERN coursework to a deployable product that real businesses could adopt.',
    learned: 'Building IQueue taught me to think in roles and permissions first, not just CRUD screens. I learned how to structure a REST API around concurrent appointment updates, deploy frontend and backend independently on Vercel and Render, and design UIs that stay usable when staff only see their own queue during peak hours.',
    parts: [
      {
        title: 'Vendor & Customer Experiences',
        summary: 'Core booking flows and business-facing dashboards for managing services, staff, and appointments.',
        highlights: [
          '<strong>Vendor dashboard</strong> for businesses to serve online and walk-in customers, manage appointments, services, staff assignments, and operational workflows from a single interface.',
          '<strong>Customer booking flow</strong> enabling users to discover services, select time slots, and manage their appointments without phone calls or in-person coordination.',
          '<strong>Service &amp; workflow management</strong> allowing vendors to define offerings, durations, pricing, and staff availability rules that drive the scheduling engine.'
        ],
        impact: 'These flows turn abstract scheduling rules into something a salon, clinic, or repair shop could actually run day to day. Customers get self-service booking; vendors get one place to see demand instead of juggling messages and paper lists.',
        learned: 'I learned to model availability as data the scheduling engine consumes, not hard-coded UI logic. Designing the customer discovery-to-booking path forced me to think about validation, empty states, and what happens when a slot is taken mid-checkout.'
      },
      {
        title: 'Multi-Role Authentication & Staff UI',
        summary: 'Role-specific access control and tailored views for vendors, staff, and customers.',
        highlights: [
          '<strong>Role-specific staff UI</strong> so each staff member sees only their assigned services and appointments — reducing clutter and improving focus during busy periods.',
          '<strong>Multi-role authentication</strong> separating vendor, staff, and customer experiences with tailored permissions and views for each user type.'
        ],
        impact: 'Role separation mirrors how real businesses operate: owners configure the business, staff execute appointments, and customers interact with a simplified surface. That structure reduces accidental data exposure and keeps front-desk staff focused during rush periods.',
        learned: 'I gained hands-on experience wiring auth middleware, protecting routes by role, and building three distinct UX paths from one codebase. It clicked that good multi-tenant apps fail gracefully when permissions are wrong — so I tested each role path explicitly.'
      },
      {
        title: 'Cloud Deployment & API Architecture',
        summary: 'Production hosting and RESTful backend connecting the SPA to MongoDB.',
        highlights: [
          '<strong>Full-stack cloud deployment</strong> with the React frontend hosted on Vercel and the Express/MongoDB backend on Render for high availability and scalable request handling.',
          '<strong>RESTful API architecture</strong> connecting the SPA to persistent document storage, supporting real-time appointment state across concurrent users.'
        ],
        impact: 'Splitting frontend and backend across managed hosts mirrors common startup deployment patterns. The REST layer makes it straightforward to add mobile clients or integrations later without rewriting business logic.',
        learned: 'Deploying end to end taught me environment variables, CORS, and the difference between "works locally" and "works in production." I also learned to design API responses around the UI states the SPA actually needs, not just database documents.'
      }
    ]
  },
  {
    id: 'ecommerce',
    category: 'software-dev',
    title: 'E-Commerce Platform — SQL Server & .NET',
    url: 'https://github.com/ahsankhan75/MSSQL-Server-Ecommerce-Platform',
    linkLabel: 'View Repo',
    tags: ['C#', '.NET 9', 'SQL Server', 'EF Core', 'Avalonia UI', 'Python'],
    summary: 'A three-phase, end-to-end e-commerce system built for CS 340 — Databases at LUMS. The project spans normalized schema design, advanced T-SQL features on 1M+ rows, and a cross-platform .NET desktop app demonstrating the Factory Design Pattern with interchangeable LINQ and Stored Procedure business logic layers.',
    impact: 'This project shows how enterprise e-commerce systems are built in layers: schema integrity at the database, performance features at scale, and swappable business logic in the application. The 1M+ row dataset and verified $1.25B+ revenue analytics prove the design holds under realistic load, not toy samples.',
    learned: 'I learned to treat the database as a first-class design partner — constraints, triggers, and partitions are not afterthoughts. Implementing the Factory Pattern with live LINQ vs stored-procedure switching gave me a concrete feel for Open/Closed Principle and when ORMs vs T-SQL each win.',
    parts: [
      {
        title: 'Phase 1 — Schema Design',
        summary: 'Normalized relational model in third normal form with integrity constraints.',
        highlights: [
          '<strong>Phase 1 — Schema:</strong> 7 normalized tables in 3NF covering users, products, categories, carts, orders, and admins with CHECK constraints, UNIQUE keys, and appropriate ON DELETE behavior.'
        ],
        impact: 'A clean 3NF schema prevents duplicate product rows, orphaned order lines, and ambiguous admin access before any UI exists. CHECK and UNIQUE constraints enforce business rules at the lowest level, where they cannot be bypassed by a buggy client.',
        learned: 'I learned to diagram entities and cardinalities before writing CREATE TABLE scripts. Choosing ON DELETE behavior for each relationship forced me to think through real deletion scenarios — what happens when a category is removed but products still reference it?'
      },
      {
        title: 'Phase 2 — Advanced SQL at Scale',
        summary: 'Partitioning, views, indexes, functions, triggers, and analytical queries over 1M+ rows.',
        highlights: [
          '<strong>Phase 2 — Advanced SQL:</strong> Table partitioning on Order/OrderItem by date, 3 views, 4 indexes, 3 scalar functions, 3 triggers (AFTER &amp; INSTEAD OF), 3 stored procedures, and CTE analytical queries across <strong>1,060,150 synthetic rows</strong>.',
          '<strong>Data pipeline:</strong> Python scripts generating and bulk-loading 100K products, 500K orders, 400K order items with partition-aligned dates and realistic distributions.'
        ],
        impact: 'Partitioning and indexed views make time-range revenue queries practical on million-row order history. Triggers enforce stock consistency automatically, which is how production systems avoid overselling when multiple checkout sessions race.',
        learned: 'Writing T-SQL at this scale taught me to EXPLAIN plans mentally: when a CTE beats a nested subquery, when a covering index pays off, and how bulk insert scripts must align partition keys. Generating synthetic data in Python bridged my data-science tooling with DBA workflows.'
      },
      {
        title: 'Phase 3 — .NET Application & Factory Pattern',
        summary: 'Layered desktop app with runtime-swappable BLL implementations and integration tests.',
        highlights: [
          '<strong>Phase 3 — Application:</strong> Five-project layered .NET architecture (Models, DAL, BLL, Factory, UI) with Avalonia desktop UI across 6 windows — login, shopping, cart, checkout, and admin dashboard.',
          '<strong>Factory Pattern:</strong> Runtime toggle between LINQ (EF Core) and Stored Procedure BLL implementations, demonstrating Open/Closed Principle with live UI switching.',
          '<strong>Integration testing:</strong> Automated test suite verifying factory switching, auth flows, order placement, stock triggers, and admin revenue analytics ($1.25B+ verified revenue).'
        ],
        impact: 'The desktop app proves the schema and SQL features serve real user journeys — browse, cart, checkout, admin analytics. Factory switching shows stakeholders two valid data-access strategies without forking the entire codebase.',
        learned: 'I learned layered architecture in C# for real: Models stay dumb, DAL talks to SQL, BLL encodes rules, UI stays thin. Building Avalonia screens across six windows taught me MVVM-ish separation, and integration tests caught regressions when I swapped BLL implementations.'
      }
    ]
  },
  {
    id: 'basics-pandas',
    category: 'data-science',
    title: 'Basics of Pandas — Galactic Census Analysis',
    url: 'https://github.com/ahsankhan75/Basics-Of-Pandas',
    linkLabel: 'View Repo',
    tags: ['Pandas', 'Jupyter', 'Otter Grader'],
    summary: 'A narrative-driven data analysis project where you act as a cadet for the Intergalactic Federation of Planets, cleaning and analyzing corrupted census data from 200 planets across four star systems. Implemented as a Jupyter notebook with 21 graded exercises, all validated by automated Otter Grader tests.',
    impact: 'The galactic census framing turns foundational pandas skills into a repeatable analysis workflow: load messy CSVs, clean categoricals, filter with boolean logic, merge datasets, and summarize with groupby and pivot tables. That pipeline applies directly to real census, survey, or CRM exports.',
    learned: 'I solidified vectorized thinking — reaching for .loc, boolean masks, and pd.cut instead of Python loops. Otter Grader forced me to match exact outputs, which trained precision in index handling and edge cases I would have skipped in a casual notebook.',
    parts: [
      {
        title: 'Data Loading & Cleaning',
        summary: 'Exploring and standardizing two corrupted census datasets.',
        highlights: [
          'Loaded and explored two CSV datasets (galactic census + political factions), handling messy column names, missing values, and inconsistent categorical labels.',
          'Applied data cleaning: column standardization, index management, null auditing, and star-system name normalization via vectorized string operations.'
        ],
        impact: 'Real datasets arrive dirty; this phase mirrors the 80% of analyst time spent before any chart appears. Normalizing star-system names and auditing nulls prevents silent wrong joins later.',
        learned: 'I learned to inspect dtypes and value counts immediately after load. Vectorized string ops (.str.strip, .str.lower) became my default for categorical cleanup instead of apply() hacks.'
      },
      {
        title: 'Filtering & Feature Engineering',
        summary: 'Boolean indexing and composite metrics for planetary analysis.',
        highlights: [
          'Built boolean filters, .loc/.iloc indexing, and compound conditions to identify safe havens, elite economic zones, and rebel strongholds.',
          'Engineered a <strong>development_index</strong> composite score and crime-level tiers via <code>pd.cut()</code> binning.'
        ],
        impact: 'Compound filters translate policy questions ("which planets are safe AND economically strong?") into reproducible code. Binning raw scores into tiers makes patterns readable for decision-makers.',
        learned: 'I learned when .loc vs .iloc matters for label-based vs positional slicing. pd.cut() taught me to document bin edges explicitly so stakeholders know what "high crime" actually means numerically.'
      },
      {
        title: 'Merging & Aggregation',
        summary: 'Joining census and faction data with groupby and pivot analysis.',
        highlights: [
          'Merged census and faction data; performed GroupBy aggregations, top-N per group queries, and multi-dimensional pivot tables (faction × system × metrics).'
        ],
        impact: 'Merge + groupby + pivot is the backbone of exploratory reporting in pandas. Multi-dimensional pivots reveal faction strength by star system — the same shape as sales by region by product in business analytics.',
        learned: 'I learned to validate merge row counts and check for many-to-many explosions. Top-N per group pushed me to use groupby.apply or transform patterns cleanly instead of manual loops.'
      }
    ]
  },
  {
    id: 'intermediate-pandas',
    category: 'data-science',
    title: 'Intermediate Pandas — Student Academic Success',
    url: 'https://github.com/ahsankhan75/Intermediate-Pandas',
    linkLabel: 'View Repo',
    tags: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    summary: 'A complete analysis of student retention and academic performance using 4,424 records from 17 Portuguese undergraduate programs. The notebook covers data cleaning, feature engineering, and exploratory visualization — reducing the dataset to 3,747 clean rows across 29 columns.',
    impact: 'The analysis surfaces actionable retention signals: which courses correlate with dropout, how semester grades cluster, and where "Average" standing hides at-risk students. Universities and ed-tech platforms use the same EDA patterns to target advising resources.',
    learned: 'I learned to treat cleaning as documented decisions — why zero grades were removed, how student IDs were parsed — so results are auditable. Combining np.select for tiering with Seaborn plots taught me to connect engineered features to visuals that non-technical readers understand.',
    parts: [
      {
        title: 'Data Cleaning',
        summary: 'Systematic preparation from raw enrollment records to analysis-ready rows.',
        highlights: [
          'Systematic cleaning: duplicate/null removal, whitespace stripping, regex extraction of graduation years from student IDs, and zero-grade row filtering.'
        ],
        impact: 'Without disciplined cleaning, dropout rates and GPA summaries would be inflated by duplicates and placeholder zeros. Regex on student IDs recovered cohort year for time-based analysis.',
        learned: 'I learned to log row counts after each cleaning step. Regex extraction taught me to sanity-check match rates — if 90% of IDs fail to parse, the pattern is wrong, not the data.'
      },
      {
        title: 'Feature Engineering',
        summary: 'GPA conversion, course decoding, and academic standing tiers.',
        highlights: [
          'Feature engineering: 20-point to 4.0 GPA conversion, course name decoding via dictionary mapping, and academic standing tiers (Excellent/Good/Average/Warning) via <code>np.select()</code>.'
        ],
        impact: 'Normalized GPA and readable course names make cross-program comparison fair. Standing tiers translate continuous grades into categories advisors already use in conversation.',
        learned: 'np.select() became my go-to for multi-bin categorization with explicit priority rules. Dictionary mapping for course codes reminded me to version the lookup table alongside the notebook.'
      },
      {
        title: 'Exploratory Visualization & Findings',
        summary: 'Charts and correlation analysis revealing retention patterns.',
        highlights: [
          'EDA visualizations: target distribution pie charts, stacked bar charts by course, correlation heatmaps, KDE vs scatter comparisons, violin plots, and dual-axis age/grade plots.',
          'Key findings: ~57% graduates, strong semester-grade correlation, 90% of students in "Average" standing tier, and distinct dropout patterns across high-risk courses.'
        ],
        impact: 'Visual EDA communicates that most students sit in an "Average" band where early intervention could help, and that certain courses act as dropout hotspots worth curriculum review.',
        learned: 'I learned to pick chart types for the question — violins for distribution shape, heatmaps for multicollinearity. Stating findings as percentages alongside plots made the notebook readable as a short report, not just code.'
      }
    ]
  },
  {
    id: 'statistics',
    category: 'data-science',
    title: 'Remote Work Productivity — Statistics & Feature Engineering',
    url: 'https://github.com/ahsankhan75/Statistics',
    linkLabel: 'View Repo',
    tags: ['Statistics', 'Pandas', 'Seaborn', 'Hypothesis Testing'],
    summary: 'An end-to-end statistical investigation of 1,500 remote-worker survey records, exploring how work patterns, home-office environment, collaboration, and demographics relate to productivity and well-being — from EDA through causal reasoning and permutation-based hypothesis testing.',
    impact: 'The study gives evidence-backed guidance for remote-work policy: job satisfaction drives productivity more than raw stress scores, WFH benefits vary sharply by role, and heavy meeting load may not hurt productivity as assumed. HR and people-analytics teams can reuse this framework on internal surveys.',
    learned: 'I learned to separate correlation from causation explicitly — estimating ATE and CATE before claiming "WFH helps." Permutation tests taught me that a plausible story needs a p-value; meeting load failed to show significance despite intuitive appeal.',
    parts: [
      {
        title: 'Data Preparation & Correlation Analysis',
        summary: 'Encoding survey fields and exploring linear relationships.',
        highlights: [
          'Data preparation: imputation, ordinal/nominal encoding, and binarization of stress, WFH, and meeting-load indicators.',
          'Correlation analysis revealing job satisfaction as the dominant productivity driver (r ≈ 0.51) while stress shows near-zero linear association with productivity.'
        ],
        impact: 'Proper encoding makes ordinal survey answers statistically usable. Highlighting satisfaction as the top driver redirects wellness spend toward manager support and engagement, not just stress reduction alone.',
        learned: 'I learned when imputation is defensible vs when it hides missing-not-at-random bias. Interpreting near-zero stress correlation challenged my assumptions — not every intuitive factor survives linear analysis.'
      },
      {
        title: 'Feature Engineering & Causal Inference',
        summary: 'Composite environment score and heterogeneous treatment effects of WFH.',
        highlights: [
          'Engineered a composite <strong>Work_Env_Score</strong> from home office quality, manager support, team collaboration, and internet speed with min-max normalization.',
          'Causal inference: estimated ATE of high WFH (≥3 days) at +0.17 productivity points, with heterogeneous CATE effects ranging from +1.80 (Leads) to −6.94 (Directors).'
        ],
        impact: 'A single environment score simplifies dashboards for executives. Heterogeneous CATE shows one-size WFH policy fails — directors may need different support than individual contributors.',
        learned: 'Building composite scores forced me to justify weights and normalization. CATE analysis taught me that average treatment effects hide subgroup stories that policy must address.'
      },
      {
        title: 'Hypothesis Testing',
        summary: 'Permutation test on meeting load vs productivity.',
        highlights: [
          'Permutation test (2,000 iterations) on meeting load: p ≈ 0.57, failing to reject H₀ that &gt;10 meetings/week affects productivity.'
        ],
        impact: 'Failing to reject H₀ is still a result — it cautions against mandating meeting cuts without evidence. Permutation testing provides a distribution-free check when parametric assumptions are shaky.',
        learned: 'I learned to report null results honestly. Running 2,000 permutations made the null distribution tangible; p ≈ 0.57 means the observed difference is unremarkable under random label shuffles.'
      }
    ]
  },
  {
    id: 'linear-regression-heart',
    category: 'data-science',
    title: 'Heart Attack Risk — Linear & Logistic Regression',
    url: 'https://github.com/ahsankhan75/Linear-Regression',
    linkLabel: 'View Repo',
    tags: ['scikit-learn', 'NumPy', 'Gradient Descent', 'Ridge/Lasso'],
    summary: 'A complete ML pipeline predicting heart attack risk from 8,763 patient health records. Deliberately applies OLS linear regression as a teaching baseline (achieving negative R² on the binary target) before transitioning to logistic regression — demonstrating why classification requires different models and loss functions.',
    impact: 'The pipeline mirrors clinical risk scoring workflows: encode demographics and vitals, scale appropriately, and classify binary outcomes with calibrated metrics. Showing linear regression fail on a binary target is a memorable lesson for anyone building health predictors.',
    learned: 'I learned why metric choice follows problem type — MSE on probabilities is misleading for heart-attack yes/no. Implementing gradient descent from scratch made sklearn\'s solvers less mysterious, and selective scaling preserved interpretability of binary features.',
    parts: [
      {
        title: 'Feature Engineering & Scaling',
        summary: 'Encoding high-cardinality geography and blood pressure features.',
        highlights: [
          'Feature engineering: out-of-fold target encoding for high-cardinality Country, one-hot encoding with drop-first, and blood pressure split into systolic/diastolic numeric features.',
          'Selective StandardScaler on 11 continuous columns only; binary and one-hot features left unscaled to preserve interpretability.'
        ],
        impact: 'Target encoding avoids exploding dimensionality from country while controlling leakage via out-of-fold folds. Splitting blood pressure captures clinical nuance a single column would blur.',
        learned: 'I learned that scaling everything blindly hurts interpretability of one-hot columns. Out-of-fold encoding was my first disciplined approach to leakage — fit transforms on train only.'
      },
      {
        title: 'Linear Regression & Regularization',
        summary: 'Custom gradient descent and Ridge/Lasso comparison on continuous framing.',
        highlights: [
          'Custom gradient descent implementation from scratch with 1,000-iteration convergence tracking, mirroring sklearn\'s LinearRegression baseline.',
          'Ridge (L2) and Lasso (L1) regularization comparison; Lasso achieves marginally lower MSE (0.2298 vs 0.2311).'
        ],
        impact: 'Negative R² on the binary target vividly shows why linear OLS is the wrong tool for classification, even before logistic regression enters. Regularization comparison illustrates bias-variance trade-offs on health tabular data.',
        learned: 'Tracking loss over 1,000 GD iterations taught me learning-rate sensitivity. Seeing negative R² clicked emotionally — the model is worse than predicting the mean — which sticks better than reading it in a textbook.'
      },
      {
        title: 'Logistic Regression for Classification',
        summary: 'Binary classification with class-imbalance-aware evaluation.',
        highlights: [
          'Logistic regression for binary classification with explicit discussion of class imbalance effects on precision/recall metrics.'
        ],
        impact: 'Logistic regression gives probabilistic risk scores clinicians and triage systems expect. Discussing imbalance prevents over-trusting accuracy when heart-attack positives are rare.',
        learned: 'I learned to read precision/recall alongside accuracy for imbalanced medical targets. Framing the project as "why linear fails, then logistic wins" became a template I reused in later ML coursework.'
      }
    ]
  },
  {
    id: 'eda-pattern-mining',
    category: 'data-mining',
    title: 'EDA & Pattern Mining',
    url: 'https://github.com/ahsankhan75/EDA-and-Pattern-Mining',
    linkLabel: 'View Repo',
    tags: ['Pandas', 'Apriori', 'FP-Growth', 'Urdu NLP', 'LughaatNLP'],
    summary: 'A two-part data science project covering Exploratory Data Analysis on unstructured Urdu text and structured medical tabular data, followed by Frequent Pattern Mining using brute-force search, a from-scratch Apriori implementation, and library-based Apriori/FP-Growth with association rule mining, performance benchmarking, and pattern evaluation.',
    impact: 'Combining Urdu fake-news EDA with heart-disease profiling shows the same analytical mindset on text and tables. Apriori and FP-Growth on market-basket data produces actionable association rules retailers use for shelf placement and promotions.',
    learned: 'I learned to implement Apriori before trusting mlxtend — understanding candidate generation and pruning makes library output interpretable. Urdu NLP with LughaatNLP taught me that EDA on non-English text needs script-aware normalization first.',
    parts: [
      {
        title: 'Part 1 — Exploratory Data Analysis',
        summary: 'Urdu fake/true news text analysis and Cleveland heart disease profiling.',
        highlights: [
          'Part 1 EDA: Urdu fake/true news analysis (10,083 articles) with LughaatNLP normalization, spaCy tokenization, word clouds, and character/word-length statistics revealing FAKE articles are ~3× longer than TRUE.',
          'Part 1 EDA: Cleveland heart disease dataset (1,025 patients) with univariate/bivariate/multivariate analysis, IQR/Z-score outlier detection, and engineered features (age groups, risk scores).'
        ],
        impact: 'Length disparity in fake Urdu news is a cheap screening feature for misinformation detectors. Heart-disease EDA surfaces outlier patients and risk cohorts clinicians would flag for follow-up.',
        learned: 'I learned parallel EDA workflows — text length stats vs numeric histograms — and to document language-specific preprocessing. Outlier detection with both IQR and Z-score taught me methods can disagree; judgment matters.'
      },
      {
        title: 'Part 2 — Apriori from Scratch',
        summary: 'Custom frequent itemset mining before library implementations.',
        highlights: [
          'Part 2: Custom Apriori from first principles before mlxtend library implementation on grocery transaction datasets (German + Indian market baskets).'
        ],
        impact: 'From-scratch Apriori demystifies support pruning and explains why FP-Growth later wins on speed. Market-basket datasets connect coursework to retail analytics.',
        learned: 'Implementing candidate generation myself fixed the concept of "join step" in my head. Benchmarking my version against mlxtend showed where naive Python loops hurt and where algorithmic pruning saves orders of magnitude.'
      },
      {
        title: 'Association Rules & Benchmarking',
        summary: 'Rule quality metrics, chi-square evaluation, and runtime comparison.',
        highlights: [
          'Association rule mining with support, confidence, lift, and chi-square evaluation; runtime comparison across algorithms and 50% sampling validation.'
        ],
        impact: 'Lift and chi-square separate spurious co-occurrence from meaningful rules — critical before recommending product bundles. Runtime comparison guides algorithm choice when transaction counts grow.',
        learned: 'I learned rules with high confidence but low lift can mislead merchandisers. Sampling validation taught me to check whether patterns hold on subsets, not just full data.'
      }
    ]
  },
  {
    id: 'rnn-lstm-transformer',
    category: 'data-mining',
    title: 'RNNs, LSTMs & Transformers',
    url: 'https://github.com/ahsankhan75/RNNs-LSTMs-and-Transformers',
    linkLabel: 'View Repo',
    tags: ['TensorFlow/Keras', 'LSTM', 'Transformer', 'Time Series'],
    summary: 'A comprehensive study of sequential deep learning comparing stacked LSTMs against a Transformer encoder block on Melbourne temperature forecasting, plus autoencoder-based dimensionality reduction on the Titanic dataset — with correct chronological splits and scaler fit on training data only.',
    impact: 'Fair chronological splits and train-only scaling make temperature forecasts credible for operational planning. Comparing LSTM vs Transformer on the same windowed task shows when simpler recurrent models suffice and when attention adds speed or accuracy.',
    learned: 'I learned leakage kills time-series projects — fit scalers on train, never shuffle weather rows. Building a tiny Transformer from scratch made self-attention and positional encoding concrete instead of black-box API calls.',
    parts: [
      {
        title: 'Part 1 — Temperature Forecasting',
        summary: '10-day sliding windows with LSTM vs Transformer on Melbourne min temps.',
        highlights: [
          'Part 1: 10-day sliding window forecasting on 3,650 days of Melbourne minimum temperatures; 70/15/15 chronological train/val/test split.',
          'Stacked LSTM (9→4 units) vs. single-head Transformer (d_model=8): comparable test RMSE (~0.093–0.096 scaled), Transformer trains ~2× faster per step.'
        ],
        impact: 'Comparable RMSE with faster Transformer training informs model choice for daily weather pipelines where retraining cost matters. Chronological discipline prevents inflated metrics that would fail in production.',
        learned: 'I learned windowing tricks for multivariate series and to track RMSE in both scaled and original units. Seeing Transformers win on step time, not always on error, tempered hype with empirical trade-offs.'
      },
      {
        title: 'Part 2 — Autoencoder Dimensionality Reduction',
        summary: 'Bottleneck size sweep on cleaned Titanic features.',
        highlights: [
          'Part 2: 7 autoencoders with bottleneck sizes [1, 2, 3, 4, 6, 8, 16] on cleaned Titanic features; embedding size 16 achieves dramatically lower reconstruction MSE (0.14 vs 0.88 for size 1).'
        ],
        impact: 'Reconstruction MSE vs bottleneck size guides how aggressively to compress tabular features before downstream classifiers — useful in memory-constrained or federated settings.',
        learned: 'I learned bottlenecks too small destroy information — size 1 MSE 0.88 vs size 16 at 0.14 is a vivid elbow. Tie-in to Titanic made autoencoders feel less abstract than image-only tutorials.'
      },
      {
        title: 'Theory & Architecture Mechanics',
        summary: 'BPTT, LSTM gates, positional encoding, and self-attention foundations.',
        highlights: [
          'Full theory coverage: BPTT, LSTM gates (forget/input/output), sinusoidal positional encoding, and self-attention mechanics.'
        ],
        impact: 'Documented theory alongside code gives future maintainers (and interviewers) confidence the models were chosen deliberately, not by copying notebook templates.',
        learned: 'Writing gate equations in my own words forced gaps in understanding to surface. Connecting BPTT vanishing gradients to why LSTMs exist linked theory homework to architecture decisions.'
      }
    ]
  },
  {
    id: 'clustering',
    category: 'data-mining',
    title: 'Comparative Analysis of Clustering Algorithms',
    url: 'https://github.com/ahsankhan75/Analysis-of-Clustering-Algorithms',
    linkLabel: 'View Repo',
    tags: ['K-Means', 'DBSCAN', 'K-Modes', 'PCA'],
    summary: 'A progressive clustering study across synthetic, numerical, and categorical datasets — demonstrating that no single algorithm is universal. Compares K-Means, DBSCAN, and K-Modes through visual intuition, optimal cluster selection, real-world credit card segmentation, and categorical car evaluation.',
    impact: 'The study warns practitioners against defaulting to K-Means: moons fail it, DBSCAN finds density outliers in credit data, and K-Modes handles categorical car attributes. Silhouette and cost-based elbows give defensible k choices for marketing segmentation.',
    learned: 'I learned to match algorithm to geometry and data type — Euclidean spheres vs crescents vs mixed categorical. PCA for visualization taught me clusters in 2D projected space can mislead if variance is lost, so I paired plots with silhouette scores.',
    parts: [
      {
        title: 'Part 1 — Algorithm Intuition on Synthetic Data',
        summary: 'K-Means vs DBSCAN on blobs and moons.',
        highlights: [
          'Part 1: K-Means succeeds on spherical blobs but fails on crescent-shaped moons; DBSCAN (eps=0.3) captures non-linear density structure.'
        ],
        impact: 'Visual failure cases prevent deploying K-Means on arbitrarily shaped customer segments where density-based methods excel.',
        learned: 'I learned eps and min_samples tuning for DBSCAN interact — too large eps merges clusters, too small leaves noise everywhere. Moons became my mental test whenever someone says "just run k-means."'
      },
      {
        title: 'Part 2 & 3 — Real-World Numerical Segmentation',
        summary: 'Mall customers and credit card clustering with PCA visualization.',
        highlights: [
          'Part 2: Mall Customers dataset — optimal k=5 via silhouette score (0.554) revealing five distinct income/spending segments.',
          'Part 3: Credit card segmentation (k=2) with PCA visualization; DBSCAN flags 814 density-based outliers for investigator review.'
        ],
        impact: 'Five mall segments map to targeted marketing tiers; credit outlier flags support fraud or collections review without labeling every row manually.',
        learned: 'Silhouette gave a numeric backbone to visual elbow guesses. DBSCAN outlier counts taught me clustering doubles as anomaly detection when eps is chosen carefully.'
      },
      {
        title: 'Part 4 — Categorical Clustering with K-Modes',
        summary: 'Cost-based elbow on car evaluation attributes.',
        highlights: [
          'Part 4: K-Modes on categorical car evaluation data with cost-based elbow method identifying k=2 profile groups.'
        ],
        impact: 'K-Modes enables segmentation on purely categorical product or survey data where K-Means would require brittle encoding.',
        learned: 'I learned mode-based centroids and cost functions differ from Euclidean k-means. The elbow on clustering cost mirrored inertia plots but for categorical dissimilarity.'
      }
    ]
  },
  {
    id: 'recommender',
    category: 'data-mining',
    title: 'Movie Recommender Systems',
    url: 'https://github.com/ahsankhan75/Recommender-Systems',
    linkLabel: 'View Repo',
    tags: ['Collaborative Filtering', 'Neural CF', 'Word2Vec', 'MovieLens'],
    summary: 'An end-to-end study of collaborative filtering, content-based filtering, neural collaborative filtering, and hybrid recommendation on the MovieLens ml-latest-small dataset (610 users, 9,724 movies, 100,836 ratings, ~98.3% sparsity).',
    impact: 'Item-based CF winning on RMSE and MRR shows sparse rating matrices favor stable item neighborhoods — insight streaming platforms use when user history is thin. Hybrid and cold-start analysis outlines a production roadmap when new users or titles arrive daily.',
    learned: 'I learned sparsity dominates recommender design — 98.3% empty cells explain why user-based CF wobbles. Building NeuMF and Word2Vec CBF side by side taught me when to embed users/items vs embed movie text metadata.',
    parts: [
      {
        title: 'Collaborative Filtering & Neural CF',
        summary: 'User-based, item-based, and NeuMF embedding models.',
        highlights: [
          'Collaborative filtering: user-based CF, item-based CF, and NeuMF-style Neural CF with learned user/item embeddings and MLP interaction layers.',
          'Item-based CF wins on all metrics (RMSE 0.843, P@10 0.311, MRR 0.659) — more stable than user neighborhoods in sparse matrices.'
        ],
        impact: 'Strong item-based results recommend "customers who liked X also liked Y" shelves for e-commerce and VOD catalogs under sparsity.',
        learned: 'I learned to evaluate with RMSE plus ranking metrics (P@10, MRR) because users see lists, not squared errors. NeuMF showed how deep learning can learn interaction functions CF matrices miss.'
      },
      {
        title: 'Content-Based Filtering',
        summary: 'Genre cosine similarity and Word2Vec on movie text.',
        highlights: [
          'Content-based: genre one-hot cosine similarity and Word2Vec CBF using titles, genres, and tags as text documents.'
        ],
        impact: 'CBF saves cold-start items with no ratings yet — new releases can rank by genre and tag similarity until ratings accumulate.',
        learned: 'I learned to concatenate metadata into pseudo-documents for Word2Vec. Genre one-hot cosine is a strong baseline I now try before jumping to deep models.'
      },
      {
        title: 'Hybrid System & Cold-Start Analysis',
        summary: 'Blending neural CF with content scores for new users and items.',
        highlights: [
          'Hybrid system blending Neural CF scores with Word2Vec content scores; cold-start analysis for new users and new items.'
        ],
        impact: 'Hybrid scoring is how Netflix-like systems bootstrap new accounts and catalog additions without waiting months for ratings.',
        learned: 'I learned weighted blending is an engineering choice — tune how much to trust CF vs CBF when history is empty. Cold-start scenarios forced explicit test splits I would have ignored in accuracy-only benchmarks.'
      }
    ]
  },
  {
    id: 'word2vec',
    category: 'nlp',
    title: 'Word2Vec from Scratch — Skip-Gram with Negative Sampling',
    url: 'https://github.com/ahsankhan75/Word2Vec',
    linkLabel: 'View Repo',
    tags: ['NumPy', 'NLTK', 'Skip-Gram', 'Negative Sampling'],
    summary: 'A from-scratch Word2Vec implementation trained on The Fellowship of the Ring using only NumPy and NLTK — no deep learning frameworks. Builds dense 100-dimensional embeddings from 8,451 vocabulary tokens via Skip-Gram with Negative Sampling, following Mikolov et al. (2013).',
    impact: 'Custom embeddings capture Tolkien-specific semantics — character and place similarity without pretrained general-domain vectors. Persisted w2v_W.npy becomes reusable features for downstream Urdu and LSTM comparison projects.',
    learned: 'I learned Skip-Gram + negative sampling inside-out: dual matrices, sigmoid scoring, and why log-space prevents underflow. Training on one novel made evaluation tangible — king − man + woman analogies either work on Aragorn or they do not.',
    parts: [
      {
        title: 'Pipeline & Training Loop',
        summary: 'Preprocessing through SGD updates on center and context matrices.',
        highlights: [
          'Full pipeline: text preprocessing, sliding context window pair generation, negative sampling, and dual embedding matrices (W center, C context) updated via SGD.',
          'Cross-entropy loss with sigmoid scoring; manual gradient computation for center and context vectors.'
        ],
        impact: 'A reproducible NumPy-only pipeline runs anywhere without GPU frameworks — useful for teaching and for small-domain embedding refresh jobs.',
        learned: 'I learned negative sampling distribution tuning (power of 3/4) affects training stability. Hand-derived gradients for center vs context rows cemented backprop beyond autograd magic.'
      },
      {
        title: 'Evaluation & Visualization',
        summary: 'Cosine similarity, analogies, and PCA plots on Tolkien entities.',
        highlights: [
          'Evaluation via cosine similarity on Tolkien character/place pairs, word analogies (king − man + woman), and PCA visualization.'
        ],
        impact: 'Qualitative analogies and PCA clusters validate that 100 dimensions capture narrative relationships — the same sanity checks used before deploying embeddings in search or recommender features.',
        learned: 'I learned embedding quality is judged by tasks, not loss alone. PCA plots helped spot collapsed clusters when training was underfed or window size was wrong.'
      },
      {
        title: 'Artifact Persistence',
        summary: 'Saving trained weights for downstream projects.',
        highlights: [
          'Trained embeddings persisted to <code>w2v_W.npy</code> for downstream use in the LSTM-Assisted Word2Vec comparison project.'
        ],
        impact: 'Versioned .npy artifacts let later notebooks load identical vectors for fair LSTM vs Word2Vec comparisons without retraining.',
        learned: 'I learned to document vocabulary order alongside weight files — misaligned indices silently ruin downstream models.'
      }
    ]
  },
  {
    id: 'lstm-word2vec',
    category: 'nlp',
    title: 'LSTM-Assisted Word2Vec',
    url: 'https://github.com/ahsankhan75/LSTM-Assisted-Word2Vec',
    linkLabel: 'View Repo',
    tags: ['NumPy', 'LSTM', 'BPTT', 'GloVe', 'Gensim'],
    summary: 'Extends Word2Vec with an LSTM language model built entirely in NumPy — forward pass, backpropagation through time, and gradient descent — trained on the same Tolkien corpus (208,557 tokens, 8,445 vocabulary). Compares LSTM-extracted embeddings against Word2Vec and pretrained GloVe vectors.',
    impact: 'Side-by-side embedding comparisons show when recurrent context beats fixed-window Skip-Gram on literary text, and when pretrained GloVe still wins on coverage. Heatmaps on Tolkien entities guide feature choice for small-domain NLP where finetuning BERT is overkill.',
    learned: 'Implementing LSTM + BPTT in pure NumPy was the hardest and most rewarding NLP exercise I did — every gate derivative had to be right. Comparing three embedding sources taught me no single representation is universal; task and corpus size decide.',
    parts: [
      {
        title: 'LSTM Language Model from Scratch',
        summary: 'Full forward/backward pass with BPTT on the Tolkien corpus.',
        highlights: [
          'Full LSTM-LM from scratch: input/forget/output gates, cell state updates, softmax output, and cross-entropy loss with BPTT optimization.',
          'Context window of 3 words before/after target; demonstrates how recurrent models capture sequential dependencies beyond fixed-window Word2Vec.'
        ],
        impact: 'A working char/word LM proves sequential structure in prose is learnable without TensorFlow — useful baseline before scaling to larger corpora or GPU training.',
        learned: 'BPTT through time steps taught me gradient clipping is not optional on long sequences. Gate activations finally clicked when I traced one token\'s error flow backward manually.'
      },
      {
        title: 'Embedding Extraction & Comparison',
        summary: 'LSTM weight-based vectors vs PA1.1 Word2Vec on entity similarity.',
        highlights: [
          'Embedding extraction from LSTM weight matrices (Wi, Wf) and cosine-similarity heatmap comparison against PA1.1 Word2Vec embeddings on Tolkien entities.'
        ],
        impact: 'Heatmaps reveal which entity pairs each method aligns — informing whether to use recurrent, count-based, or pretrained vectors for a downstream classifier.',
        learned: 'I learned extracting embeddings from LSTM weights is design-choice heavy (input vs forget vs concatenation). Visual comparison beat single-number accuracy for embedding evaluation.'
      },
      {
        title: 'Pretrained GloVe Analysis',
        summary: 'Gensim GloVe with SVD reduction, analogies, and bias study.',
        highlights: [
          'Part 3: Pretrained GloVe analysis via Gensim — Truncated SVD dimensionality reduction, 2D scatter visualization, word analogies, and bias analysis.'
        ],
        impact: 'GloVe provides broad-coverage vectors instantly; bias analysis warns against deploying analogies blindly in user-facing features.',
        learned: 'Truncated SVD for visualization taught me high-D geometry lies in 2D but still shows gross structure. Bias in analogies connected NLP ethics to homework, not just accuracy leaderboard chasing.'
      }
    ]
  },
  {
    id: 'naive-bayes',
    category: 'machine-learning',
    title: 'Naive Bayes Classification',
    url: 'https://github.com/ahsankhan75/Naive-Bayes-Classification',
    linkLabel: 'View Repo',
    tags: ['NumPy', 'Bernoulli NB', 'Multinomial NB', 'NLP'],
    summary: 'From-scratch implementations of Bernoulli and Multinomial Naive Bayes classifiers following Jurafsky & Martin\'s NLP framework. Applied to a golf weather dataset (binary features) and the TweetEval emotion dataset (bag-of-words text), then validated against scikit-learn equivalents.',
    impact: 'Bernoulli NB on golf and Multinomial NB on tweets show the right generative model depends on feature representation — a lesson that prevents misapplying sklearn defaults in text pipelines. Log-space computation avoids underflow in production keyword filters.',
    learned: 'I learned Laplace smoothing is not optional with sparse counts. Matching sklearn accuracy line-by-line validated my log-sum implementation and taught me to read Jurafsky equations as code, not symbols.',
    parts: [
      {
        title: 'Probabilistic Foundations',
        summary: 'Bayes theorem, independence, smoothing, and log-space scoring.',
        highlights: [
          'Full probabilistic machinery: Bayes\' theorem, conditional independence assumption, Laplace smoothing, and log-space computation to prevent numerical underflow.'
        ],
        impact: 'Log-space scoring is how spam filters and intent classifiers stay numerically stable on long documents with thousands of near-zero probabilities.',
        learned: 'I learned independence is "wrong but useful" — the math simplifies dramatically and often still classifies well. Implementing log-add instead of multiply prevented my first draft from outputting all zeros.'
      },
      {
        title: 'Bernoulli NB on Binary Features',
        summary: 'Golf weather play/no-play with presence/absence likelihoods.',
        highlights: [
          'Bernoulli NB on one-hot encoded golf data — modeling feature presence/absence per class with smoothed Bernoulli likelihoods.'
        ],
        impact: 'Bernoulli fits transactional or sensor on/off data where word counts do not matter — common in IoT fault detection.',
        learned: 'I learned Bernoulli expects binary inputs; feeding counts without binarizing silently hurts performance. Golf dataset made the generative story easy to debug class-by-class.'
      },
      {
        title: 'Multinomial NB on Text & Validation',
        summary: 'TweetEval bag-of-words and sklearn comparison.',
        highlights: [
          'Multinomial NB on tokenized tweets — bag-of-words count vectors with vocabulary-level smoothed multinomial probabilities.',
          'Side-by-side accuracy comparison with sklearn, justifying model–dataset pairings based on feature representation (binary vs. count).'
        ],
        impact: 'Multinomial NB remains a strong baseline for emotion or topic tagging on short social text where deep models are overkill.',
        learned: 'Tokenization choices shift the vocabulary and thus the model. sklearn parity checks became my habit after any from-scratch classifier — diff probabilities first, not just final accuracy.'
      }
    ]
  },
  {
    id: 'knn',
    category: 'machine-learning',
    title: 'KNN & Radius Nearest Neighbors — From Scratch',
    url: 'https://github.com/ahsankhan75/KNN-and-Radius-Nearest-Neighbours',
    linkLabel: 'View Repo',
    tags: ['NumPy', 'MNIST', 'Cross-Validation', 'r-NN'],
    summary: 'Implements k-Nearest Neighbors and Radius Nearest Neighbors classifiers entirely from scratch in NumPy — no sklearn for classifier logic. Applied to MNIST digit recognition (10-class, 784-dimensional) and Wisconsin Breast Cancer diagnosis (binary malignant vs. benign).',
    impact: 'MNIST at k=3 and breast cancer r-NN show instance-based learning still competes on moderate-sized tabular and image flatten tasks. Cross-validation on 60K samples demonstrates honest hyperparameter selection before test evaluation.',
    learned: 'I learned distance metric choice matters — Manhattan vs Euclidean swapped errors on MNIST digits. r-NN taught me fixed-radius neighborhoods adapt density automatically, unlike k which forces exactly k votes even in empty regions.',
    parts: [
      {
        title: 'Part 1 — k-NN on MNIST',
        summary: 'From-scratch k-NN with Euclidean/Manhattan metrics and 5-fold CV.',
        highlights: [
          'Part 1: k-NN from scratch on 60K MNIST training samples with Euclidean and Manhattan distance metrics, 5-fold cross-validation, and k=3 as optimal hyperparameter.'
        ],
        impact: 'Digit recognition without neural nets is a credible baseline for embedded systems with tight latency and explainability requirements — neighbors are inspectable.',
        learned: '5-fold CV on 60K rows taught me vectorization beats triple Python loops but memory still hurts. k=3 as optimum was a reminder bias-variance trade-off is empirical, not formulaic.'
      },
      {
        title: 'Part 2 — sklearn Validation',
        summary: 'Confirming scratch implementation matches library results.',
        highlights: [
          'Part 2: sklearn k-NN validation confirming scratch implementation accuracy matches library results.'
        ],
        impact: 'Parity with sklearn de-risks the custom code for grading and for environments where sklearn is allowed but you need transparent neighbor logic.',
        learned: 'I learned to compare confusion matrices row-wise, not just accuracy — a 0.1% gap can hide systematic digit-pair swaps.'
      },
      {
        title: 'Part 3 — Radius Nearest Neighbors',
        summary: 'Fixed-radius classification on breast cancer with tie-breaking.',
        highlights: [
          'Part 3: r-NN classifier defining neighborhoods by fixed radius rather than neighbor count, with radius tuning on 569-sample breast cancer dataset.',
          'Tie-breaking via k-backoff, feature scaling awareness, and analysis of bias-variance trade-offs across hyperparameter choices.'
        ],
        impact: 'r-NN flags sparse regions as uncertain instead of forcing a label — valuable in medical diagnosis where low neighbor density should trigger human review.',
        learned: 'Feature scaling before distance metrics on cancer features prevented one dominant dimension from hijacking votes. k-backoff for ties was a small detail that fixed flat accuracy plateaus.'
      }
    ]
  },
  {
    id: 'linear-logistic-zombie',
    category: 'machine-learning',
    title: 'Linear & Logistic Regression — Human-Zombie Screening',
    url: 'https://github.com/ahsankhan75/Linear-and-Logistic-Regression',
    linkLabel: 'View Repo',
    tags: ['NumPy', 'Gradient Descent', 'One-vs-All', 'Regularization'],
    summary: 'A two-stage screening system set in year 3050: first predict a continuous Human-Zombie Score (0–100) from lifestyle features via linear regression, then classify passengers into boarding categories (Human / Quarantine / Zombie) via multiclass logistic regression — all implemented from scratch in NumPy and compared with scikit-learn.',
    impact: 'The narrative two-stage pipeline mirrors real screening: regress a risk score, then threshold into actions. Multiclass OvA with explicit feature scaling story applies to fraud tiers, medical triage bands, and content moderation queues.',
    learned: 'I learned OvA logistic regression is three binary problems sharing features — implementation clarity matters for debugging class 2 vs class 0 swaps. The zombie metaphor made regularization and scaling discussions memorable in presentations.',
    parts: [
      {
        title: 'Task 1 — Linear Regression for Risk Score',
        summary: 'Multivariate regression with scaling, GD, and regularization on telemetry.',
        highlights: [
          'Task 1: Multivariate linear regression with custom StandardScaler, gradient descent, and sklearn Ridge/Lasso/ElasticNet regularization on 1,000 telemetry samples.',
          'Features span height, weight, screen time, junk food frequency, physical activity, and task completion — each with documented inverse/positive correlations to zombie score.'
        ],
        impact: 'Continuous risk scores let operators set quarantine thresholds dynamically instead of hard binary rules on raw features.',
        learned: 'Custom StandardScaler before GD stopped features on different scales from stalling convergence. Documenting correlation direction per feature helped catch sign errors in coefficients early.'
      },
      {
        title: 'Task 2 — Multiclass Logistic Regression',
        summary: 'One-vs-All classification for boarding categories.',
        highlights: [
          'Task 2: One-vs-All (OvA) logistic regression with binary cross-entropy loss and sigmoid activation for 3-class boarding decisions.'
        ],
        impact: 'Three-way classification maps to Human / Quarantine / Zombie lanes — structurally identical to low/medium/high risk routing in security products.',
        learned: 'I learned softmax is not mandatory when OvA + argmax over sigmoids works. Tracking per-class BCE loss isolated which category was underfit.'
      },
      {
        title: 'Evaluation & Scaling Discussion',
        summary: 'MSE, accuracy, F1, and confusion matrices with scaling analysis.',
        highlights: [
          'Evaluation via MSE, accuracy, F1-score, and confusion matrices with explicit discussion of feature scaling necessity across disparate ranges.'
        ],
        impact: 'Confusion matrices on quarantine class show costly false negatives — the metric stakeholders care about beyond headline accuracy.',
        learned: 'F1 on minority zombie class taught me to report per-class metrics in imbalanced multiclass problems. Scaling discussion became a checklist I reuse before any distance or gradient-based model.'
      }
    ]
  },
  {
    id: 'nn-binary',
    category: 'machine-learning',
    title: 'Neural Network Binary Classification — Guardian Code Rot Detector',
    url: 'https://github.com/ahsankhan75/Neural-Network-Binary-Classification',
    linkLabel: 'View Repo',
    tags: ['PyTorch', 'Computer Vision', 'Feedforward NN'],
    summary: 'A PyTorch feedforward neural network that classifies 64×64 grayscale CT scan images of humanoid Guardians as infected with "Code Rot" or safe. Complete pipeline from 8,580 images through train/val/test splits, normalization, training, and error analysis — achieving ~99.5% test accuracy.',
    impact: 'Near-perfect CT classification demonstrates a minimal CNN-free pipeline can suffice when images are aligned and classes are visually distinct — relevant for rapid medical imaging prototypes before investing in heavy architectures.',
    learned: 'I learned normalization and stratified splits matter as much as layer sizes — most gains came from clean data plumbing, not exotic architectures. Inspecting the nine misclassified images taught me error analysis beats chasing 100% on paper.',
    parts: [
      {
        title: 'Model Architecture & Training',
        summary: 'Feedforward network with cross-entropy and Adam over 100 epochs.',
        highlights: [
          'Custom feedforward architecture with cross-entropy loss and Adam optimizer over 100 epochs.'
        ],
        impact: 'A shallow MLP on flattened scans trains fast on laptop GPUs — viable for screening workflows with tight iteration cycles.',
        learned: 'I learned to track train vs val loss each epoch to catch overfitting early. Adam\'s default lr worked but only after pixel normalization to zero mean.'
      },
      {
        title: 'Performance Metrics',
        summary: 'Test accuracy, ROC AUC, and per-class precision/recall.',
        highlights: [
          'Test accuracy 99.48% with only 9 misclassified images out of 1,716; ROC AUC ≈ 1.00.',
          'Per-class precision/recall/F1 both above 0.99 for infected and not-infected classes.'
        ],
        impact: 'Balanced precision/recall on both classes matters clinically — high accuracy alone hides biased favoring of the majority "safe" label.',
        learned: 'ROC AUC near 1.00 confirmed separability but I learned to still inspect confusion matrix off-diagonals — nine errors may share a visual pattern.'
      },
      {
        title: 'Error Analysis',
        summary: 'Visual inspection of failure cases and limitation discussion.',
        highlights: [
          'Misclassification analysis with visual inspection of failure cases and discussion of model limitations.'
        ],
        impact: 'Documented failure modes set expectations before deployment — some errors may be label noise or ambiguous scans, not model bugs.',
        learned: 'I learned to save misclassified tensors as a gallery — patterns (lighting, border artifacts) jumped out only visually. Limitation section practice helped interview storytelling.'
      }
    ]
  },
  {
    id: 'urdu-rnn',
    category: 'machine-learning',
    title: 'Urdu News Category Classification with RNNs',
    url: 'https://github.com/ahsankhan75/RNN-Based-Urdu-News-Category-Classification-on-Web-Scraped-News-Data',
    linkLabel: 'View Repo',
    tags: ['TensorFlow/Keras', 'LSTM', 'Web Scraping', 'Urdu NLP'],
    summary: 'An end-to-end NLP project that scrapes Urdu news articles from Pakistani news portals, builds a labeled dataset, and trains LSTM-based classifiers to automatically categorize articles into entertainment, sports, business, world, and science/technology — achieving 83–87% test accuracy.',
    impact: 'Automated Urdu categorization supports media aggregators and misinformation monitors covering underserved languages where English-centric models fail. Dual-branch title+content architecture shows headline-only routing is viable for faster inference.',
    learned: 'I learned web scraping is half the project — Selenium for dynamic sites, label harmonization across outlets, and LughaatNLP normalization before any LSTM. Dual-branch vs single-branch comparison taught me fusion architecture choices move accuracy several points.',
    parts: [
      {
        title: 'Data Acquisition & Preprocessing',
        summary: 'Scraping Pakistani news sites and Urdu text cleaning.',
        highlights: [
          'Data acquisition via custom NewsScraper class using BeautifulSoup and Selenium across major Pakistani news portals.',
          'Urdu text preprocessing with LughaatNLP: script normalization, stopword removal, and noise filtering.',
          'Multi-source dataset merging, label harmonization, and hyperparameter experimentation across model variants.'
        ],
        impact: 'A labeled Urdu corpus from live portals reflects real headline noise and HTML artifacts — more valuable than clean Wikipedia slices for production news routing.',
        learned: 'Selenium vs BeautifulSoup trade-offs became concrete when sites lazy-loaded content. LughaatNLP stopwords reduced vocabulary size without stripping meaningful Urdu morphology.'
      },
      {
        title: 'Dual-Branch LSTM Architecture',
        summary: 'Separate title and content encoders with fusion.',
        highlights: [
          'Dual-branch LSTM architecture processing title and content separately (~86% accuracy) vs. single-branch concatenated input (~82.9%).'
        ],
        impact: 'Headlines alone often determine category for push notifications — dual-branch lets deploy title-only path for low-latency mobile alerts.',
        learned: 'I learned to align sequence lengths and padding separately per branch. ~3 point gain justified extra complexity over naive concatenation before a single LSTM.'
      },
      {
        title: 'Training & Evaluation',
        summary: 'Hyperparameter search and test accuracy across variants.',
        highlights: [
          'Multi-source dataset merging, label harmonization, and hyperparameter experimentation across model variants.'
        ],
        impact: '83–87% across five categories is deployable for human-in-the-loop tagging at regional news desks, cutting manual sort time.',
        learned: 'Harmonizing category labels across portals taught me ontology mapping — "sci-tech" vs "technology" breaks models if ignored. I tracked experiments in tables to avoid retuning blindly.'
      }
    ]
  },
  {
    id: 'cnn-alpr',
    category: 'computer-vision',
    title: 'Detective Vision — License Plate Recognition',
    url: 'https://github.com/ahsankhan75/CNN',
    linkLabel: 'View Repo',
    tags: ['PyTorch', 'OpenCV', 'YOLOv8', 'ALPR'],
    summary: 'An end-to-end Automatic License Plate Recognition (ALPR) system combining PyTorch CNNs, OpenCV classical vision, and YOLOv8 object detection. Trains a character classifier on 36 classes (digits 0–9, letters A–Z), then deploys it in a full detection → segmentation → recognition pipeline on real vehicle photographs.',
    impact: 'ALPR pipelines power tolling, parking, and law-enforcement assist systems. Pakistan-style plate validation and OCR confusion correction (O↔0, I↔1) show locale-aware post-processing is as important as raw CNN accuracy.',
    learned: 'I learned CV production is a chain — YOLO miss means CNN never runs. Training on 28×28 chars then deploying on segmented crops taught me domain shift between curated digits and thresholded plate segments.',
    parts: [
      {
        title: 'Character CNN Training',
        summary: 'Baseline and compressed architectures on 36-class glyph dataset.',
        highlights: [
          'Baseline 3-layer CNN achieving 98% validation accuracy; compressed architecture with MaxPooling (~55.7K params) achieving 97% with full precision/recall/F1.',
          'Dataset: 1,903 training + 458 validation character images at 28×28 grayscale; trained on Apple Silicon (MPS) with CPU fallback.'
        ],
        impact: '97–98% char accuracy with 55K params enables edge deployment on gate cameras without GPU servers.',
        learned: 'MaxPooling compression barely hurt accuracy — I learned parameter count vs depth trade-offs for embedded targets. MPS training with CPU fallback taught me portable PyTorch device handling.'
      },
      {
        title: 'Multi-Stage ALPR Pipeline',
        summary: 'YOLO detection through segmentation to CNN recognition.',
        highlights: [
          'Multi-stage ALPR pipeline: YOLOv8n vehicle detection → custom plate detector → OpenCV plate cropping → adaptive threshold character segmentation → CNN recognition.'
        ],
        impact: 'End-to-end photos-to-plate-string is what municipalities evaluate — isolated char CNN benchmarks alone do not ship.',
        learned: 'Adaptive threshold segmentation was the fragile step — lighting changes broke crops until I tuned morphological ops. Chaining models forced modular testing at each stage.'
      },
      {
        title: 'Post-Processing & Validation',
        summary: 'EasyOCR integration and Pakistan plate format rules.',
        highlights: [
          'Supporting <code>util.py</code> module with EasyOCR integration, Pakistan-style plate format validation (LLDDLLL), and OCR confusion correction (O↔0, I↔1).'
        ],
        impact: 'Format validation rejects hallucinated strings before database lookup — reducing false positives in access control lists.',
        learned: 'I learned regex plate templates plus char confusion maps recover accuracy cheaper than bigger CNNs. EasyOCR as fallback hybridized classical and learned OCR sensibly.'
      }
    ]
  },
  {
    id: 'camera-models',
    category: 'computer-vision',
    title: '3D-to-2D Mapping & Camera Models',
    url: 'https://github.com/ahsankhan75/3D-to-2D-Mapping-and-Camera-Models',
    linkLabel: 'View Repo',
    tags: ['NumPy', 'Pinhole Camera', '3D Projection'],
    summary: 'A hands-on exploration of the pinhole camera model, projecting a 3D LEGO point cloud (29,250 vertices) onto a 2D image plane while systematically varying intrinsic parameters (focal length) and extrinsic parameters (camera position and rotation) — implementing the full projection equation in NumPy without external CV libraries.',
    impact: 'Pinhole math underpins AR, robotics, and photogrammetry — understanding K, R, T intrinsics/extrinsics prevents black-box calibration mistakes. Telephoto vs wide-angle comparisons explain why surveillance focal length changes re-identification difficulty.',
    learned: 'I learned projection is matrix multiplication plus divide-by-Z — implementing without OpenCV made every step inspectable. Homogeneous coordinates finally felt necessary, not notational clutter.',
    parts: [
      {
        title: 'Core Projection Pipeline',
        summary: 'Homogeneous coords, extrinsics, intrinsics, and perspective divide.',
        highlights: [
          'Full projection pipeline: homogeneous coordinates → extrinsics [R|T] → intrinsics K → perspective divide (u = fx·X/Z, v = fy·Y/Z).'
        ],
        impact: 'Explicit u,v equations are what SLAM and NeRF preprocessors implement — this project is the readable spec behind those libraries.',
        learned: 'I learned Z must stay positive in front of the camera or points flip — a sign error in extrinsics inverted my first plot. Keeping fx, fy separate matters for non-square pixels.'
      },
      {
        title: 'Five Graded Scenarios',
        summary: 'Telephoto, perspective matching, rotation, and comparative views.',
        highlights: [
          'Five graded scenarios: basic projection, telephoto effects, perspective matching, rotational views, and comparative analysis.',
          'Demonstrates why telephoto-far can approximate wide-close viewpoints but with different perspective distortion characteristics.'
        ],
        impact: 'Scenario matrix gives intuition for choosing camera placement in 3D reconstruction — when to move the camera vs zoom.',
        learned: 'Telephoto-far vs wide-close equivalence is approximate — I learned parallel lines convergence differs, affecting measurement apps. Rotational views taught me gimbal order in R matrices.'
      },
      {
        title: 'Visualization & Analysis',
        summary: 'Side-by-side 2D scatter comparisons across camera setups.',
        highlights: [
          'Side-by-side 2D scatter visualizations comparing projections under different camera setups.'
        ],
        impact: 'Visual diffs communicate distortion faster than projection matrices to non-CV stakeholders reviewing simulation setups.',
        learned: 'I learned scatter density reveals occlusions — overlapping LEGO points project to single pixels. Comparative plots became my debug tool when matrices looked correct but images looked wrong.'
      }
    ]
  },
  {
    id: 'nn-cnns',
    category: 'deep-learning',
    title: 'Neural Networks & CNNs — From Scratch to PyTorch',
    url: 'https://github.com/ahsankhan75/Neural-Network-and-CNNs',
    linkLabel: 'View Repo',
    tags: ['NumPy', 'PyTorch', 'CNN', 'Pruning'],
    summary: 'A two-part learning arc building intuition for neural networks and CNNs through progressive implementation. Part 1 implements MLPs from scratch in NumPy on 8 synthetic 2D classification problems; Part 2 hand-implements convolution and backpropagation, then applies PyTorch to CIFAR-10 with bottleneck architectures and weight pruning.',
    impact: 'Synthetic 2D datasets make decision boundaries visible — invaluable for teaching and debugging before CIFAR scale. Bottleneck CNNs and L1 pruning show accuracy vs inference cost trade-offs mobile deployers face daily.',
    learned: 'I learned backprop by implementing it on XOR and spirals — autograd clicked only after manual gradients hurt. PyTorch pruning API taught me structured vs unstructured sparsity affects speed differently on hardware.',
    parts: [
      {
        title: 'Part 1 — MLPs from Scratch',
        summary: 'Custom MLP on eight synthetic 2D classification datasets.',
        highlights: [
          'Part 1: Custom MLP class with forward/backward passes, mini-batch SGD, BCE loss, and architecture tuning across linear, XOR, spiral, moons, and checkerboard datasets.'
        ],
        impact: 'Visible decision boundaries prove depth and width needs vary by geometry — prevents overkill networks on linearly separable tabular data.',
        learned: 'Mini-batch SGD noise helped escape local minima on spirals. BCE vs CE choice for binary vs multi-class became muscle memory.'
      },
      {
        title: 'Part 2 Task 1 — NumPy CNN',
        summary: 'Modular conv layers with pytest on 8×8 digits.',
        highlights: [
          'Part 2 Task 1: NumPy CNN with modular layers, pytest unit tests, trained on 8×8 scikit-learn digits.'
        ],
        impact: 'Unit-tested conv layers catch shape bugs before training — pattern reusable in custom accelerator or embedded NN bring-up.',
        learned: 'Implementing conv backward was the hardest single assignment I completed — pytest on tiny tensors isolated off-by-one kernel bugs.'
      },
      {
        title: 'Part 2 Tasks 2 & 3 — PyTorch CIFAR & Pruning',
        summary: 'Bottleneck CNN architecture and sparse conv inference.',
        highlights: [
          'Part 2 Task 2: PyTorch PlainCNN vs BottleneckCNN (1×1 → 3×3 → 1×1 blocks) on CIFAR-10 resized to 224×224.',
          'Part 2 Task 3: SparseConv2d with L1 unstructured pruning for efficient CIFAR-10 inference.'
        ],
        impact: 'Bottleneck blocks cut params with modest accuracy cost — same idea as ResNet bottlenecks in production vision backbones. Pruning shows post-training compression path when retraining from scratch is too expensive.',
        learned: '1×1 convs for channel reduction finally made sense when I compared FLOPs tables. L1 pruning magnitude thresholds needed tuning — too aggressive collapsed accuracy on CIFAR fine details.'
      }
    ]
  },
  {
    id: 'optimizers-ae',
    category: 'deep-learning',
    title: 'Optimizers & Autoencoders',
    url: 'https://github.com/ahsankhan75/Optimizers-and-Autoencoders',
    linkLabel: 'View Repo',
    tags: ['PyTorch', 'Autoencoders', 'Adam', 'Segmentation'],
    summary: 'A three-part deep learning assignment exploring classical optimization from first principles and applying modern adaptive optimizers to train autoencoders for reconstruction, denoising, classification analysis, latent-space interpolation, and brain tumor MRI segmentation.',
    impact: 'Optimizer comparisons on Rosenbrock and Rastrigin inform hyperparameter choices before large training runs. U-Net-style tumor segmentation with Dice loss connects autoencoder coursework to medical imaging pipelines hospitals actually evaluate.',
    learned: 'I learned Adam is not magic — on simple bowls GD with line search wins; on noisy AE loss Adam shines. Skip connections in segmentation taught me encoders alone lose spatial detail critical for pixel masks.',
    parts: [
      {
        title: 'Part 1 — Classical Optimization',
        summary: 'GD, Adam, and Adadelta on benchmark functions with 3D plots.',
        highlights: [
          'Part 1: Hand-implemented gradient descent with line search, Adam, and Adadelta on benchmark functions (Rosenbrock, Himmelblau, Rastrigin) with 3D convergence visualizations.'
        ],
        impact: 'Visualizing optimizer trajectories on Rastrigin explains why training stalls in saddle regions — guides when to switch optimizers or restart.',
        learned: 'Line search implementation taught me Wolfe conditions conceptually even if I simplified them. 3D plots made Adam\'s adaptive steps obvious on narrow valleys.'
      },
      {
        title: 'Part 2 — Autoencoders for Reconstruction',
        summary: 'Linear and conv AEs on CIFAR/MNIST with downstream tasks.',
        highlights: [
          'Part 2: Linear and convolutional autoencoders on CIFAR-10/MNIST for reconstruction and denoising; downstream CNN classification on reconstructed data; latent-space interpolation.'
        ],
        impact: 'Denoising AEs recover usable inputs from corrupted scans — precursor to diffusion denoisers. Latent interpolation generates smooth morphs for data augmentation.',
        learned: 'I learned bottleneck size controls blur vs detail in reconstructions. Training classifier on reconstructed data quantifies information loss numerically.'
      },
      {
        title: 'Part 3 — Medical Segmentation',
        summary: 'U-Net-style AE with skip connections and Dice loss on MRI.',
        highlights: [
          'Part 3: U-Net-style segmentation autoencoder with skip connections and Dice loss for brain tumor mask prediction on MRI data.',
          'Seven saved model checkpoints with documented metrics in Overall_Results.json.'
        ],
        impact: 'Dice-optimized masks align with clinician overlap metrics better than pure pixel MSE — relevant for tumor volume tracking.',
        learned: 'Skip connections preserved edge boundaries my plain AE smeared. Checkpoint + JSON logging habit started here for experiment reproducibility.'
      }
    ]
  },
  {
    id: 'gans',
    category: 'deep-learning',
    title: 'GANs & Latent Space Interpolation',
    url: 'https://github.com/ahsankhan75/GANs-and-Latent-Space-Interpolation',
    linkLabel: 'View Repo',
    tags: ['PyTorch', 'GAN', 'DCGAN', 'MNIST'],
    summary: 'A hands-on exploration of Generative Adversarial Networks — building and training a vanilla GAN on MNIST from scratch, then probing latent space geometry through interpolation and vector arithmetic on both custom-trained and pre-trained DCGAN models (CelebA faces).',
    impact: 'GAN interpolation demos explain generative UI features — morphing faces or products in marketing tools. Failure mode analysis (mode collapse) sets expectations before betting production budgets on GANs vs diffusion.',
    learned: 'I learned generator/discriminator balance is fragile — if D wins too fast, G stops learning. CelebA vector arithmetic showed latent directions can align with semantic attributes without labeled supervision.',
    parts: [
      {
        title: 'Vanilla GAN on MNIST',
        summary: 'Custom Generator/Discriminator with BCE adversarial training.',
        highlights: [
          'Custom Generator and Discriminator with BCE adversarial loss; 50-epoch MNIST training with loss visualization and sample generation.'
        ],
        impact: 'MNIST GAN samples validate the training loop before scaling compute to faces — standard research workflow.',
        learned: 'Loss curves lie — visual sample quality mattered more than D loss magnitude. I learned label smoothing and noise on D inputs stabilize training slightly.'
      },
      {
        title: 'Latent Space Interpolation',
        summary: 'Linear blends between noise vectors for smooth morphs.',
        highlights: [
          'Latent space interpolation: smooth visual morphs between noise vectors z(α) = α·z₁ + (1−α)·z₂.'
        ],
        impact: 'Interpolation powers "drag slider to morph" UX in creative apps and synthetic data augmentation between class extremes.',
        learned: 'Spherical interpolation sometimes beats linear in high-D latents — I experimented after seeing mid-blend ghosting. Alpha stepping taught me to save GIFs for qualitative QA.'
      },
      {
        title: 'Vector Arithmetic & Failure Analysis',
        summary: 'CelebA DCGAN semantic blends and GAN vs diffusion comparison.',
        highlights: [
          'Vector arithmetic in CelebA DCGAN latent space blending semantic attributes (expressions, features).',
          'Analysis of GAN failure modes (mode collapse, instability) vs. diffusion model advantages.'
        ],
        impact: 'Semantic arithmetic foreshadows text-to-image prompt directions — adding "smile" as a vector offset. Documented instability justifies diffusion for production quality at cost of slower sampling.',
        learned: 'Pretrained DCGAN latents are finicky — not every arithmetic direction is semantic. Writing GAN vs diffusion pros/cons prepared me for later DDPM coursework honestly.'
      }
    ]
  },
  {
    id: 'diffusion',
    category: 'deep-learning',
    title: 'Diffusion Models — From Theory to Practice',
    url: 'https://github.com/ahsankhan75/Diffusion-Models',
    linkLabel: 'View Repo',
    tags: ['PyTorch', 'DDPM', 'Stable Diffusion', 'ControlNet'],
    summary: 'A two-notebook learning arc bridging DDPM mathematical foundations and production generative AI. Part 1 trains a time-conditioned U-Net denoiser on MNIST from scratch (70 epochs); Part 2 applies pretrained Stable Diffusion for CFG, inpainting, and ControlNet + IP-Adapter style transfer.',
    impact: 'From-scratch DDPM makes Stable Diffusion pipelines interpretable — noise schedules and epsilon prediction are not magic knobs. ControlNet + IP-Adapter demos show controllable generation for design, architecture, and marketing asset workflows.',
    learned: 'I learned diffusion sampling is iterative denoising — training stability improved when I treated noise schedules seriously. Moving to SD taught me CFG scale dramatically shifts prompt adherence vs diversity.',
    parts: [
      {
        title: 'Part 1 — DDPM Foundations on MNIST',
        summary: 'Forward/reverse diffusion math and class-conditional generation.',
        highlights: [
          'Forward/reverse diffusion math: noise schedule βₜ, cumulative ᾱₜ, reparameterization trick, and ε-prediction training objective.',
          'Class-conditional MNIST generation and CLIP-guided text sampling steering output toward prompts like "two" or "nine".'
        ],
        impact: 'MNIST DDPM is a reproducible sandbox for papers and teaching — same equations as image SD at toy scale.',
        learned: 'Reparameterization trick clicked when I coded sqrt(ᾱ) scaling explicitly. Class conditioning taught me embedding labels into U-Net like time steps.'
      },
      {
        title: 'Part 2 — Stable Diffusion & CFG',
        summary: 'Pretrained SD v1.5 text-to-image with classifier-free guidance.',
        highlights: [
          'Classifier-Free Guidance (CFG) with Stable Diffusion v1.5 for text-to-image generation.'
        ],
        impact: 'CFG is the default quality knob in commercial text-to-image APIs — understanding it prevents blind prompt engineering.',
        learned: 'High CFG sharpens prompt match but can oversaturate — I learned to sweep guidance scales per use case. Pipeline memory tricks (attention slicing) mattered on laptop GPUs.'
      },
      {
        title: 'Inpainting & ControlNet',
        summary: 'SD inpainting and structure/style-controlled generation.',
        highlights: [
          'Image inpainting with SD 2 Inpainting; ControlNet (Canny edges) + IP-Adapter for structural and style-controlled artistic generation.'
        ],
        impact: 'Inpainting enables product photo cleanup; ControlNet enables sketch-to-render workflows architects and game artists use daily.',
        learned: 'Canny ControlNet taught me edge maps must match training distribution — sloppy edges leak structure. IP-Adapter separated style from layout more cleanly than prompt alone.'
      }
    ]
  },
  {
    id: 'gnn',
    category: 'deep-learning',
    title: 'Graph Neural Networks — Three-Part Exploration',
    url: 'https://github.com/ahsankhan75/Graph-Neural-Networks',
    linkLabel: 'View Repo',
    tags: ['PyTorch Geometric', 'GraphSAGE', 'ST-GCN', 'Spectral GCN'],
    summary: 'A progressive journey through Graph Neural Networks on non-Euclidean data — from classical shortest-path algorithms to spectral graph theory and spatio-temporal forecasting. Three self-contained notebooks covering maze navigation, graph classification, and traffic prediction.',
    impact: 'GraphSAGE maze agents show RL-free navigation learning on irregular grids — relevant for warehouse robots. ST-GCN traffic forecasting mirrors smart-city sensor networks where data is inherently relational, not grid images.',
    learned: 'I learned graphs need explicit edge_index thinking — batching heterogeneous graphs in PyG was a skill jump from CNN dataloaders. Spectral vs spatial GCN trade-offs connected linear algebra coursework to modern GNN papers.',
    parts: [
      {
        title: 'Part 1 — GraphSAGE Maze Navigation',
        summary: 'Imitation learning policy compared to Dijkstra optimal paths.',
        highlights: [
          'Part 1: GraphSAGE policy network learning maze navigation via imitation learning, compared against Dijkstra\'s optimal paths (NetworkX + PyG).',
          'Reusable utility module for maze generation, Dijkstra pathfinding, and visualization across Part 1 experiments.'
        ],
        impact: 'Near-optimal learned policies on mazes suggest GNNs can approximate shortest-path experts on dynamic warehouse graphs without rerunning Dijkstra every timestep.',
        learned: 'Imitation learning loss vs path length metric taught me behavioral cloning inherits expert mistakes on unseen mazes. Shared util module enforced DRY across maze sizes.'
      },
      {
        title: 'Part 2 — Spectral GCN on MUTAG',
        summary: 'Graph Laplacian filtering and molecular graph classification.',
        highlights: [
          'Part 2: Spectral graph theory with Graph Laplacian filtering and Laplacian-regularized GCN on the MUTAG molecular graph dataset.'
        ],
        impact: 'Molecular property prediction is a core pharma GNN use case — MUTAG is the gateway benchmark.',
        learned: 'Laplacian eigenbases linked Fourier intuition on graphs to convolution definitions. Regularization stabilized small molecular graphs with varied node counts.'
      },
      {
        title: 'Part 3 — Spatio-Temporal Traffic Forecasting',
        summary: 'ST-GCN on sensor grid with temporal modeling.',
        highlights: [
          'Part 3: Spatio-Temporal GCN (ST-GCN) for traffic forecasting on a sensor grid, combining spatial graph convolutions with temporal modeling.'
        ],
        impact: 'Traffic forecasting reduces congestion routing errors — ST-GCN captures both road topology and rush-hour temporal patterns.',
        learned: 'I learned to build adjacency from sensor distance thresholds and align time windows for seq2seq forecasting. Combining spatial GCN layers with temporal convs or RNNs needed careful tensor ordering.'
      }
    ]
  },
  {
    id: 'rag',
    category: 'llms-agents',
    title: 'Retrieval-Augmented Generation & Prompt Caching',
    url: 'https://github.com/ahsankhan75/RAG',
    linkLabel: 'View Repo',
    tags: ['LangChain', 'Pinecone', 'Mistral', 'HuggingFace Embeddings'],
    summary: 'A two-part coursework project building RAG systems from scratch and optimizing a conversational chatbot with semantic prompt caching. Part 1 implements end-to-end retrieval over documents with systematic parameter tuning; Part 2 adds embedding-based cache lookup to skip redundant LLM calls.',
    impact: 'Grid-searched chunk and top-K settings show RAG quality is as much retrieval engineering as model choice — directly applicable to policy bots and internal knowledge assistants. Semantic caching cuts latency and cost when users rephrase similar questions.',
    learned: 'I learned LCEL chains compose cleanly but debugging retrieval means logging intermediate docs. Cache similarity thresholds trade cost for risk — 0.75 hit rate taught me near-duplicates can return wrong cached answers.',
    parts: [
      {
        title: 'Part 1 — RAG Pipeline & Tuning',
        summary: 'Embeddings, Pinecone retrieval, Mistral generation, and grid search.',
        highlights: [
          'Part 1: Full RAG pipeline — HuggingFace embeddings → Pinecone vector store → similarity retrieval → Mistral generation via LangChain LCEL chains.',
          'Grid search over chunk size, overlap, top-K, and similarity threshold; routing chain classifying academic-policy vs. general questions.'
        ],
        impact: 'Routing academic vs general questions prevents policy citations on chitchat — a pattern enterprise support bots use. Grid search results give defensible defaults for chunk size instead of copying blog posts.',
        learned: 'Chunk overlap affects recall on boundary sentences — I logged retrieval hits manually during tuning. Routing chain was my first classifier-before-RAG pattern.'
      },
      {
        title: 'Part 2 — Semantic Prompt Caching',
        summary: 'History-aware chatbot with embedding cache lookup.',
        highlights: [
          'Part 2: History-aware chatbot with semantic caching — cosine similarity ≥ 0.75 threshold returns cached responses without LLM invocation.',
          'Performance measurement of cache hit rates vs. latency trade-offs; analysis of adversarial near-duplicate queries causing incorrect cache hits.'
        ],
        impact: 'Caching similar prompts can slash API bills on FAQ-heavy deployments — if adversarial near-duplicates are monitored.',
        learned: 'I learned cache keys need semantic embeddings, not string equality. Documenting false cache hits from paraphrased policy questions made me add confidence disclaimers on cached paths.'
      }
    ]
  },
  {
    id: 'rag-vs-ft',
    category: 'llms-agents',
    title: 'RAG vs Fine-Tuning — Formula 1 Knowledge Chatbot',
    url: 'https://github.com/ahsankhan75/RAG-vs-Finetuning',
    linkLabel: 'View Repo',
    tags: ['Llama 3.2', 'FAISS', 'TRL SFTTrainer', 'LangChain'],
    summary: 'A hands-on comparison of RAG and Supervised Fine-Tuning for domain adaptation, both built on identical Formula 1 racing data (1950–2024) and the same base model — Meta Llama 3.2 1B Instruct — so behavioral differences isolate the adaptation method.',
    impact: 'Three-way comparison (vanilla, RAG, SFT) gives decision criteria: RAG updates with new race results without retraining; SFT bakes facts into weights but risks stale knowledge. F1 domain makes factual hallucinations easy to spot in evaluation.',
    learned: 'I learned SFT on 32K pairs needs careful formatting to Alpaca templates or Llama chat tokens misalign. RAG retrieval quality capped answers when Ergast stats were in context — FT answered from memory even when slightly wrong.',
    parts: [
      {
        title: 'Dataset Construction',
        summary: '32K+ Q&A pairs scraped from Ergast F1 API.',
        highlights: [
          'Scraped and compiled 32,000+ instruction–output Q&amp;A pairs from the Ergast F1 API covering drivers, teams, races, and qualifying times.'
        ],
        impact: 'Large aligned dataset enables fair RAG vs FT comparison — both methods see the same factual universe.',
        learned: 'API pagination and rate limits dominated build time. I learned deduplication and template consistency matter more than raw pair count for SFT.'
      },
      {
        title: 'RAG Pipeline',
        summary: 'Sentence-transformers, FAISS, and LangChain RetrievalQA.',
        highlights: [
          'RAG pipeline: sentence-transformers embeddings → FAISS vector store → LangChain RetrievalQA with retrieved context injection at query time.'
        ],
        impact: 'RAG answers cite retrievable race stats — update index after each Grand Prix without GPU retrain.',
        learned: 'FAISS local index was simpler than Pinecone for coursework scale. RetrievalQA prompt template strongly affected whether Llama used context or ignored it.'
      },
      {
        title: 'Fine-Tuning & Benchmark',
        summary: 'TRL SFTTrainer and three-way vanilla/RAG/FT evaluation.',
        highlights: [
          'Fine-tuning: TRL SFTTrainer on Alpaca-format pairs (1 epoch, lr 2e-4) encoding domain knowledge directly into model weights.',
          'Vanilla baseline benchmark (no retrieval, no fine-tuning) for three-way comparison of factual recall, hallucination risk, updateability, and inference cost.'
        ],
        impact: 'Benchmark axes (updateability, cost, hallucination) map to product choices — legal bots favor RAG audit trails; offline edge devices may favor FT.',
        learned: 'One epoch at 2e-4 was enough to overfit small factoids on 1B model — I learned monitor eval loss on held-out seasons. Vanilla baseline quantified how much domain hurt out-of-box Llama.'
      }
    ]
  },
  {
    id: 'ai-agents',
    category: 'llms-agents',
    title: 'AI Agents & Tools',
    url: 'https://github.com/ahsankhan75/AI-Agents-and-Tools',
    linkLabel: 'View Repo',
    tags: ['LangGraph', 'LangChain', 'Tavily Search', 'Multi-Agent'],
    summary: 'A progressive exploration of agentic AI design patterns with LangChain and LangGraph — from reflection loops and tool calling to a full multi-agent fact-checking crew with live web search, culminating in an empirical comparison of three verification strategies on 51 multilingual claims.',
    impact: 'Multi-agent fact-checking at 90% vs 80% for single-agent search shows structured roles reduce hallucinated citations on news claims. Reflection loops improve code generation quality — patterns reusable in internal dev assistants.',
    learned: 'I learned LangGraph state machines beat ad-hoc while loops for agent control flow. Tool schemas must be tight — vague flight search tools returned noisy context. Cost vs accuracy on 51 claims made multi-agent ROI tangible.',
    parts: [
      {
        title: 'Section 1 — Reflection Agent',
        summary: 'Generate → critique → revise loops for code improvement.',
        highlights: [
          'Section 1: LangGraph reflection agent — generate → critique → revise loops for iterative Python code improvement.'
        ],
        impact: 'Reflection reduces syntax errors before human review — similar to Copilot self-correction patterns.',
        learned: 'I learned critique prompts need concrete rubrics or the model praises bad code. Stopping conditions prevent infinite revise loops burning tokens.'
      },
      {
        title: 'Section 2 — Tool-Calling Travel Agent',
        summary: 'LangChain agent with flight, weather, and event tools.',
        highlights: [
          'Section 2: Tool-calling travel agent with @tool decorators (flights, weather, events) via LangChain create_agent.'
        ],
        impact: 'Tool calling is how assistants book real workflows — flights and weather are proxy for CRM/API integrations.',
        learned: '@tool docstrings are the schema LLMs read — vague args caused wrong city lookups. create_agent simplified wiring vs manual ReAct parsing.'
      },
      {
        title: 'Section 3 — Multi-Agent Fact-Checking Crew',
        summary: 'Researcher, devil\'s advocate, verifier, and writer with NEEDS_MORE_INFO loops.',
        highlights: [
          'Section 3: Multi-agent fact-checking crew — supporting evidence researcher, devil\'s advocate, lead verifier, and report writer with conditional NEEDS_MORE_INFO loops.'
        ],
        impact: 'Adversarial role reduces single-model confirmation bias — critical for misinformation pipelines in Urdu/English multilingual settings.',
        learned: 'Conditional NEEDS_MORE_INFO edges taught me explicit graph branching in LangGraph. Devil\'s advocate must cite counter-sources, not just negate.'
      },
      {
        title: 'Section 4 — Benchmark & Cost Analysis',
        summary: 'Three strategies on 10 claims with accuracy and cost trade-offs.',
        highlights: [
          'Section 4: Benchmark on 10 claims — zero-shot LLM (80%), simple search agent (80%), multi-agent crew (90%) accuracy; analysis of cost vs. accuracy trade-offs.'
        ],
        impact: '90% accuracy at higher token cost frames product decision: multi-agent for high-stakes claims, single search for bulk triage.',
        learned: 'I learned to log token usage per strategy — multi-agent won accuracy but 3× calls hurt at scale. Multilingual claims exposed search tool language gaps.'
      }
    ]
  }
];
