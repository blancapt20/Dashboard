// Sample data
const postsData = [

  {
    "author": "Andreas Horn",
    "profile_summary": "Andreas Horn's most successful LinkedIn posts often provide practical, in-depth insights into AI and technology advancements with a clear educational value, while incorporating a personal tone and engaging CTAs.",
    "postUrl": "https://www.linkedin.com/feed/update/urn:li:activity:7344003893170745345",
    "score": 9.5,
    "reasons": "High engagement metrics with a substantial number of likes, comments, and reposts.; Strong hook with curiosity-sparking and direct relevance to AI professionals.; Valuable educational content with a detailed breakdown of AI Agent protocols.; Well-structured with lists and readability-enhancing elements.; Personal tone with a promise for further content through a mailing list.; Effective CTA encouraging readers to join a newsletter.",
    "content_type": "educational",
    "content_theme": "AI Agents",
    "likes": 2768,
    "comments": 115,
    "reposts": 434
  },
  {
    "author": "Andreas Horn",
    "profile_summary": "Andreas Horn's most successful LinkedIn posts often provide practical, in-depth insights into AI and technology advancements with a clear educational value, while incorporating a personal tone and engaging CTAs.",
    "postUrl": "https://www.linkedin.com/feed/update/urn:li:activity:7344971610757464064",
    "score": 8.5,
    "reasons": "Strong engagement with a high number of reposts, indicating value to the audience.; Providing a practical, actionable framework backed by McKinsey's insights.; High readability due to clear structure and bullet points.; Personal and authoritative tone.; Clever CTA to subscribe to the newsletter for more insights.; Timing potentially leveraged LinkedIn's algorithm with fresh content.",
    "content_type": "news",
    "content_theme": "Enterprise AI Implementation",
    "likes": 2221,
    "comments": 120,
    "reposts": 252
  },
  {
    "author": "Andreas Horn",
    "profile_summary": "Andreas Horn's most successful LinkedIn posts often provide practical, in-depth insights into AI and technology advancements with a clear educational value, while incorporating a personal tone and engaging CTAs.",
    "postUrl": "https://www.linkedin.com/feed/update/urn:li:activity:7344070704255897600",
    "score": 7.5,
    "reasons": "Engagement reflects a strong interest in the topic, especially with a high comment count.; Humorous and engaging hook with a twist on full-stack development.; Clear, insightful look at future tech workflows, appealing to tech professionals.; Personal tone with a narrative style.; Effective use of lists to facilitate readability.; Invites interaction through the CTA in the newsletter promotion.",
    "content_type": "storytelling",
    "content_theme": "Future of Work with AI",
    "likes": 1531,
    "comments": 165,
    "reposts": 44
  },
  {
    "author": "Andreas Horn",
    "profile_summary": "Andreas Horn's most successful LinkedIn posts often provide practical, in-depth insights into AI and technology advancements with a clear educational value, while incorporating a personal tone and engaging CTAs.",
    "postUrl": "https://www.linkedin.com/feed/update/urn:li:activity:7344218263062523904",
    "score": 6,
    "reasons": "Moderate engagement highlighting specific interests in AI model breakdowns.; Hook effectively points out common confusion, attracting AI professionals.; Educational value by providing a breakdown of AI models.; Utilizes numbering and bullet points for clear readability.; Authentic tone promises utility for AI professionals.; Subtle CTA encouraging newsletter subscription.",
    "content_type": "educational",
    "content_theme": "AI Model Selection",
    "likes": 745,
    "comments": 70,
    "reposts": 121
  },
  {
    "author": "Andreas Horn",
    "profile_summary": "Andreas Horn's most successful LinkedIn posts often provide practical, in-depth insights into AI and technology advancements with a clear educational value, while incorporating a personal tone and engaging CTAs.",
    "postUrl": "https://www.linkedin.com/feed/update/urn:li:activity:7345075552732467200",
    "score": 4.5,
    "reasons": "Lower engagement reflects niche appeal or oversaturation.; The hook aims to challenge the reader's current practices.; Good list of practical tools but lacks depth in explanation.; Readable format with lists and bullet points.; Authentic tone, though the content might feel less compelling.; CTA for newsletter exists but is less pronounced.",
    "content_type": "educational",
    "content_theme": "AI Tools",
    "likes": 323,
    "comments": 50,
    "reposts": 43
  },
  {
    "author": "Rakesh Gohel",
    "profile_summary": "For Rakesh Gohel, posts that provide comprehensive guides or updates about AI Agents, featuring lists, clear formatting, and valuable insights gain the most engagement. Posts with educational content combined with a strong hook and valuable resources perform particularly well.",
    "postUrl": "https://www.linkedin.com/feed/update/urn:li:activity:7345319255694786560",
    "score": 9.5,
    "reasons": "Highly detailed and structured breakdown of AI technology (educational value).; Uses lists and clear formatting for readability.; Encourages interaction with a CTA asking followers to save, react, and share.; Capitalizes on current trends in AI Agents, attracting interest from those in the industry.",
    "content_type": "educational",
    "content_theme": "AI Agents",
    "likes": 4593,
    "comments": 162,
    "reposts": 560
  },
  {
    "author": "Rakesh Gohel",
    "profile_summary": "For Rakesh Gohel, posts that provide comprehensive guides or updates about AI Agents, featuring lists, clear formatting, and valuable insights gain the most engagement. Posts with educational content combined with a strong hook and valuable resources perform particularly well.",
    "postUrl": "https://www.linkedin.com/feed/update/urn:li:activity:7343256651447062528",
    "score": 9.5,
    "reasons": "Repetition of a successful format and topic as seen in the previous post.; Maintains same value, format, and engagement strategy.; The consistency in educational content attracts the target audience.",
    "content_type": "educational",
    "content_theme": "AI Agents",
    "likes": 4593,
    "comments": 162,
    "reposts": 560
  },
  {
    "author": "Rakesh Gohel",
    "profile_summary": "For Rakesh Gohel, posts that provide comprehensive guides or updates about AI Agents, featuring lists, clear formatting, and valuable insights gain the most engagement. Posts with educational content combined with a strong hook and valuable resources perform particularly well.",
    "postUrl": "https://www.linkedin.com/feed/update/urn:li:activity:7342228584662474752",
    "score": 6.8,
    "reasons": "Provides in-depth guide with actionable insights on implementing AI agents.; Effective use of lists for clarity and readability.; Limited engagement compared to similar posts indicating possible repetition or niche interest area not appealing to wider audience.",
    "content_type": "educational",
    "content_theme": "AI Agents",
    "likes": 1439,
    "comments": 41,
    "reposts": 174
  },
  {
    "author": "Rakesh Gohel",
    "profile_summary": "For Rakesh Gohel, posts that provide comprehensive guides or updates about AI Agents, featuring lists, clear formatting, and valuable insights gain the most engagement. Posts with educational content combined with a strong hook and valuable resources perform particularly well.",
    "postUrl": "https://www.linkedin.com/feed/update/urn:li:activity:7342894870220500992",
    "score": 7.5,
    "reasons": "Includes a direct, valuable offer: a collection of free resources.; Clear structure and use of sections to target different skill levels increase accessibility.; Strong hook and repetitive success in offering practical resources.",
    "content_type": "educational",
    "content_theme": "AI Agents",
    "likes": 1283,
    "comments": 55,
    "reposts": 196
  },
  {
    "author": "Rakesh Gohel",
    "profile_summary": "For Rakesh Gohel, posts that provide comprehensive guides or updates about AI Agents, featuring lists, clear formatting, and valuable insights gain the most engagement. Posts with educational content combined with a strong hook and valuable resources perform particularly well.",
    "postUrl": "https://www.linkedin.com/feed/update/urn:li:activity:7345173696354897920",
    "score": 5.5,
    "reasons": "Provides news and updates which are timely but lack the depth of other posts.; List of updates can be overwhelming without added context or personal insight.; Lower engagement suggests timing or topic relevance did not resonate as strongly.",
    "content_type": "news",
    "content_theme": "AI Agents",
    "likes": 543,
    "comments": 30,
    "reposts": 59
  }

];

const conclusionsData = "To optimize LinkedIn post performance for this profile, a few strategies clearly emerge: \\n\\n1. Content should be centered around industry trends and thought leadership--these posts have consistently outperformed others. \\n2. Incorporate visual elements, like infographics or videos, into posts as these have been shown to significantly increase engagement. \\n3. Tailor content to elicit audience interaction, such as asking a question or for feedback; posts inciting conversation have demonstrated higher scores. \\n4. Publish content in the early morning or late evening times where past posts have seen the most traffic. \\n5. Lastly, posts should be kept brief and direct as prolonged content historically has lower engagement.";

// Initialize charts and data
let engagementChart, likesChart, commentsChart;
let filteredData = [...postsData];

// Populate filter options
function populateFilters() {
    const authors = [...new Set(postsData.map(post => post.author))];
    const contentTypes = [...new Set(postsData.map(post => post.content_type))];
    const themes = [...new Set(postsData.map(post => post.content_theme))];

    const authorFilter = document.getElementById('authorFilter');
    const contentTypeFilter = document.getElementById('contentTypeFilter');
    const themeFilter = document.getElementById('themeFilter');

    authors.forEach(author => {
        const option = document.createElement('option');
        option.value = author;
        option.textContent = author;
        authorFilter.appendChild(option);
    });

    contentTypes.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type.charAt(0).toUpperCase() + type.slice(1);
        contentTypeFilter.appendChild(option);
    });

    themes.forEach(theme => {
        const option = document.createElement('option');
        option.value = theme;
        option.textContent = theme;
        themeFilter.appendChild(option);
    });
}

// Create engagement chart by theme
function createEngagementChart(data) {
    const ctx = document.getElementById('engagementChart').getContext('2d');
    
    if (engagementChart) {
        engagementChart.destroy();
    }

    // Calculate average score per theme
    const themeStats = {};
    data.forEach(post => {
        if (!themeStats[post.content_theme]) {
            themeStats[post.content_theme] = {
                totalScore: 0,
                count: 0
            };
        }
        themeStats[post.content_theme].totalScore += post.score;
        themeStats[post.content_theme].count++;
    });

    const themes = Object.keys(themeStats);
    const avgScores = themes.map(theme => themeStats[theme].totalScore / themeStats[theme].count);

    // Sort themes by average score
    const sortedThemes = themes.sort((a, b) => {
        const scoreA = themeStats[a].totalScore / themeStats[a].count;
        const scoreB = themeStats[b].totalScore / themeStats[b].count;
        return scoreB - scoreA;
    });

    const sortedScores = sortedThemes.map(theme => 
        themeStats[theme].totalScore / themeStats[theme].count
    );

    engagementChart = new Chart(ctx, {
        
        type: 'bar',
        
        data: {
            
            labels: sortedThemes,
            
            datasets: [
                
                {
                    
                    label: 'Average Score',
                    
                    data: sortedScores,
                    
                    backgroundColor: 'rgba(255, 0, 0, 0.7)',
                    
                    borderColor: 'rgba(255, 0, 0, 1)',
                    
                    borderWidth: 1
                
                }
            
            ]
        
        },
        
        options: {
            
            indexAxis: 'y',
            
            responsive: true,
            
            scales: {
                
                x: {
                    
                    beginAtZero: true,
                    
                    title: {
                        
                        display: true,
                        
                        text: 'Average Score'
                    
                    }
                
                },
                
                y: {
                    
                    ticks: {
                        
                        font: {
                            
                            size: 12
                        
                        }
                    
                    }
                
                }
            
            },
            
            plugins: {
                
                tooltip: {
                    
                    callbacks: {
                        
                        label: function(context) {
                            
                            const value = context.parsed.x.toFixed(1);
                            
                            return `Score: ${value}`;
                        
                        }
                    
                    }
                
                },
                
                legend: {
                    
                    display: false
                
                }
            
            }
        
        }
    });
}

// Create average metrics charts
function createMetricsCharts(data) {
    const contentTypes = [...new Set(data.map(post => post.content_type))];
    
    const avgLikesByType = contentTypes.map(type => {
        const posts = data.filter(post => post.content_type === type);
        return {
            type,
            avg: posts.reduce((sum, post) => sum + post.likes, 0) / posts.length
        };
    });

    const avgCommentsByType = contentTypes.map(type => {
        const posts = data.filter(post => post.content_type === type);
        return {
            type,
            avg: posts.reduce((sum, post) => sum + post.comments, 0) / posts.length
        };
    });

    // Likes Chart
    const likesCtx = document.getElementById('likesChart').getContext('2d');
    if (likesChart) {
        likesChart.destroy();
    }
    
    likesChart = new Chart(likesCtx, {
        type: 'bar',
        data: {
            labels: contentTypes.map(type => type.charAt(0).toUpperCase() + type.slice(1)),
            datasets: [{
                label: 'Average Likes',
                data: avgLikesByType.map(item => item.avg),
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                borderColor: 'rgba(255, 0, 0, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Comments Chart
    const commentsCtx = document.getElementById('commentsChart').getContext('2d');
    if (commentsChart) {
        commentsChart.destroy();
    }

    commentsChart = new Chart(commentsCtx, {
        type: 'bar',
        data: {
            labels: contentTypes.map(type => type.charAt(0).toUpperCase() + type.slice(1)),
            datasets: [{
                label: 'Average Comments',
                data: avgCommentsByType.map(item => item.avg),
                backgroundColor: 'rgba(0, 0, 255, 0.5)',
                borderColor: 'rgba(0, 0, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Update profile info
function updateProfileInfo(author) {
    const profileInfo = document.getElementById('profileInfo');
    if (author === 'all') {
        profileInfo.style.display = 'none';
        return;
    }

    const authorData = postsData.find(post => post.author === author);
    if (authorData) {
        profileInfo.innerHTML = `
            <h2>${author}'s Profile Summary</h2>
            <p>${authorData.profile_summary}</p>
        `;
        profileInfo.style.display = 'block';
    }
}

// Display top posts
function displayTopPosts(data) {
    const topPosts = [...data]
        .sort((a, b) => b.score - a.score)
        .slice(0, 3); // Show top 3 posts

    const topPostsContainer = document.getElementById('topPosts');
    topPostsContainer.innerHTML = '';

    topPosts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = 'post-card';

        const truncatedReasons = post.reasons.split(';')[0]; // Get first reason

        postCard.innerHTML = `
            <h3>Score: ${post.score.toFixed(1)}</h3>
            <p><strong>Author:</strong> ${post.author}</p>
            <p><strong>Type:</strong> ${post.content_type.charAt(0).toUpperCase() + post.content_type.slice(1)}</p>
            <p><strong>Theme:</strong> ${post.content_theme}</p>
            <p><strong>Key Reason:</strong> ${truncatedReasons}</p>
            <div class="post-stats">
                <span>👍 ${post.likes}</span>
                <span>💬 ${post.comments}</span>
                <span>🔄 ${post.reposts}</span>
            </div>
            <a href="${post.postUrl}" target="_blank" class="post-link">View Post</a>
        `;

        topPostsContainer.appendChild(postCard);
    });
}

// Generate insights
function generateInsights(data) {
    const insights = document.getElementById('insights');
    
    // Calculate most successful content type
    const contentTypeStats = {};
    data.forEach(post => {
        if (!contentTypeStats[post.content_type]) {
            contentTypeStats[post.content_type] = {
                count: 0,
                totalScore: 0,
                totalLikes: 0,
                totalComments: 0
            };
        }
        contentTypeStats[post.content_type].count++;
        contentTypeStats[post.content_type].totalScore += post.score;
        contentTypeStats[post.content_type].totalLikes += post.likes;
        contentTypeStats[post.content_type].totalComments += post.comments;
    });

    const bestContentType = Object.entries(contentTypeStats)
        .map(([type, stats]) => ({
            type,
            avgScore: stats.totalScore / stats.count,
            avgLikes: stats.totalLikes / stats.count,
            avgComments: stats.totalComments / stats.count
        }))
        .sort((a, b) => b.avgScore - a.avgScore)[0];

    insights.innerHTML = `
        <p>Based on the data analysis:</p>
        <ul>
            <li>The most successful content type is <strong>${bestContentType.type}</strong> with an average score of ${bestContentType.avgScore.toFixed(1)}.</li>
            <li>This type of content generates an average of ${Math.round(bestContentType.avgLikes)} likes and ${Math.round(bestContentType.avgComments)} comments per post.</li>
        </ul>
    `;
}

// Filter data and update visualizations
function updateDashboard() {
    const authorFilter = document.getElementById('authorFilter').value;
    const contentTypeFilter = document.getElementById('contentTypeFilter').value;
    const themeFilter = document.getElementById('themeFilter').value;

    filteredData = postsData.filter(post => {
        return (authorFilter === 'all' || post.author === authorFilter) &&
               (contentTypeFilter === 'all' || post.content_type === contentTypeFilter) &&
               (themeFilter === 'all' || post.content_theme === themeFilter);
    });

    createEngagementChart(filteredData);
    createMetricsCharts(filteredData);
    updateProfileInfo(authorFilter);
    displayTopPosts(filteredData);
    generateInsights(filteredData);
}

// Initialize dashboard
document.addEventListener('DOMContentLoaded', () => {
    // Set conclusions
    document.getElementById('conclusions').textContent = conclusionsData;
    
    populateFilters();
    updateDashboard();

    // Add event listeners to filters
    document.getElementById('authorFilter').addEventListener('change', updateDashboard);
    document.getElementById('contentTypeFilter').addEventListener('change', updateDashboard);
    document.getElementById('themeFilter').addEventListener('change', updateDashboard);
});
